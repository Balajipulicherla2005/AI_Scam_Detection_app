import { auth } from "../firebase";
import { useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "../pages/ui.css";

function ScamDetector() {

  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const [stats, setStats] = useState({
    scam: 0,
    safe: 0
  });

  const detectScam = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/check",
        { message }
      );

      const probability = res.data.probability || 0;
      const prediction = res.data.prediction || "SAFE";

      const response = {
        score: probability,
        prediction,
        reasons: []
      };

      // ✅ SIMPLE EXPLANATION
      if (prediction === "SCAM") {
        response.reasons = [
          "This message asks for sensitive information",
          "It creates urgency or pressure",
          "Sender may not be trusted",
          "Possible fraud attempt"
        ];
      } else {
        response.reasons = [
          "Message does not ask for sensitive data",
          "No urgent or risky request found",
          "Looks like a normal message"
        ];
      }

      setResult(response);

      // 📊 UPDATE STATS
      if (prediction === "SCAM") {
        setStats(prev => ({ ...prev, scam: prev.scam + 1 }));
      } else {
        setStats(prev => ({ ...prev, safe: prev.safe + 1 }));
      }

      // 💾 SAVE HISTORY
      // const history = JSON.parse(localStorage.getItem("scamHistory")) || [];
      const userEmail =
      auth.currentUser?.email;

      const historyKey =
      `scamHistory_${userEmail}`;

      const history =
      JSON.parse(
      localStorage.getItem(historyKey)
      ) || [];
      history.unshift({
        text: message,
        prediction,
        probability,
        module: "Message Safety Check",
        time: new Date().toLocaleString()
      });

      localStorage.setItem(historyKey, JSON.stringify(history));

    } catch (err) {
      console.log("Server Error", err);
    }

  };

  // 📊 GRAPH DATA
  const data = {
    labels: ["Scam", "Safe"],
    datasets: [
      {
        label: "Detection Analytics",
        data: [stats.scam, stats.safe],
        backgroundColor: ["#ef4444", "#22c55e"]
      }
    ]
  };

  return (

    <div className="detector-page">

      <div className="detector-box">

        <h1>🛡️ Is this message safe?</h1>

        <p className="subtitle">
          Paste a message and we will check it for you.
        </p>

        <textarea
          className="detector-textarea"
          placeholder="Paste message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="detect-btn"
          onClick={detectScam}
          disabled={!message.trim()}
        >
          🔍 Check Safety
        </button>

        <hr className="divider" />

        {/* ✅ RESULT */}
        {result && (
          <div className="result-box">

            {result.score > 70 ? (
              <h2 className="danger-text">🚨 This message is a SCAM</h2>
            ) : result.score > 40 ? (
              <h2 className="warning-text">⚠️ Be Careful</h2>
            ) : (
              <h2 className="safe-text">✅ This message looks SAFE</h2>
            )}

            <p className="result-desc">
              {result.score > 70
                ? "This message may try to trick you. Do not share personal details."
                : result.score > 40
                ? "This message looks suspicious. Please double-check."
                : "This message looks normal. No immediate risk found."
              }
            </p>

            {/* 🔥 CONFIDENCE */}
            <p className="confidence-text">
              Confidence: {result.score}%
            </p>

            {/* WHY */}
            <div className="reason-box">
              <h4>Why?</h4>
              <ul>
                {result.reasons.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

          </div>
        )}

        {/* 🚀 ACTION PANEL */}
        {result && (
          <div className="action-panel">

            <h3>🧭 What would you like to do next?</h3>

            <p className="action-subtext">
              Stay safe by checking links or asking our AI assistant.
            </p>

            <div className="action-buttons">

              {/* 🔗 CHECK LINK */}
              <div
                className="action-card"
                onClick={() => window.location.href="/url-scanner"}
              >
                <h4>🔗 Check a Link</h4>
                <p>Verify suspicious links before clicking</p>
              </div>

              {/* 🤖 ASK AI */}
              <div
                className="action-card"
                onClick={() => window.location.href="/assistant"}
              >
                <h4>🤖 Ask AI Assistant</h4>
                <p>Get simple explanation about this message</p>
              </div>

            </div>

          </div>
        )}

        {/* 📊 GRAPH */}
        <div className="analytics-box">

          <h2>📊 Your Activity</h2>

          <div className="chart-card">
            <Bar data={data} />
          </div>

        </div>

      </div>

    </div>

  );

}

export default ScamDetector;
