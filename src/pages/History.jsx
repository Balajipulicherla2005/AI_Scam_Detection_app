import { auth } from "../firebase";

import {
  useEffect,
  useState
} from "react";

import {
  FaTrashAlt
} from "react-icons/fa";

function History() {

  // =========================
  // STATES
  // =========================

  const [history, setHistory] =
    useState([]);




  // =========================
  // LOAD USER HISTORY
  // =========================

  useEffect(() => {

    const userEmail =
      auth.currentUser?.email;

    const historyKey =
      `scamHistory_${userEmail}`;

    const data =
      JSON.parse(
        localStorage.getItem(historyKey)
      ) || [];

    setHistory(data);

  }, []);




  // =========================
  // CLEAR HISTORY
  // =========================

  const clearHistory = () => {

    const userEmail =
      auth.currentUser?.email;

    const historyKey =
      `scamHistory_${userEmail}`;

    localStorage.removeItem(
      historyKey
    );

    setHistory([]);

  };




  // =========================
  // UI
  // =========================

  return (

    <div className="page-container">

      {/* ===== HEADER ===== */}

      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          flexWrap: "wrap",

          gap: "20px",

          marginBottom: "25px"

        }}
      >

        <div>

          <h1 className="page-title">
            📚 Detection History
          </h1>

          <p className="page-subtitle">

            View your previous scam detections,
            AI analysis reports, phishing scans,
            suspicious URL checks,
            and assistant responses.

          </p>

        </div>




        {/* CLEAR BUTTON */}

        {history.length > 0 && (

          <button

            onClick={clearHistory}

            style={{

              background:
                "linear-gradient(135deg,#ef4444,#dc2626)",

              border: "none",

              color: "#fff",

              padding:
                "15px 28px",

              borderRadius: "18px",

              fontWeight: "700",

              fontSize: "16px",

              cursor: "pointer",

              display: "flex",

              alignItems: "center",

              gap: "10px",

              boxShadow:
                "0 10px 30px rgba(239,68,68,0.35)"

            }}

          >

            <FaTrashAlt />

            Clear History

          </button>

        )}

      </div>




      {/* ===== EMPTY ===== */}

      {history.length === 0 && (

        <div
          style={{

            background:
              "linear-gradient(145deg,#0f1f3d,#09152d)",

            padding: "35px",

            borderRadius: "25px",

            border:
              "1px solid rgba(255,255,255,0.06)",

            color: "#9bb3d1",

            fontSize: "18px",

            boxShadow:
              "0 15px 40px rgba(0,0,0,0.35)"

          }}
        >

          No history available

        </div>

      )}





      {/* ===== HISTORY LIST ===== */}

      {history.map((item, index) => (

        <div

          key={index}

          style={{

            background:
              "linear-gradient(145deg,#102348,#09152d)",

            border:
              "1px solid rgba(255,255,255,0.06)",

            padding: "35px",

            marginTop: "30px",

            borderRadius: "30px",

            boxShadow:
              "0 20px 50px rgba(0,0,0,0.45)",

            overflow: "hidden",

            position: "relative"

          }}

        >



          {/* ===== TOP BLUE LINE ===== */}

          <div
            style={{

              position: "absolute",

              top: 0,

              left: 0,

              width: "100%",

              height: "4px",

              background:
                item.prediction === "SCAM"
                  ? "linear-gradient(90deg,#ef4444,#f97316)"
                  : "linear-gradient(90deg,#22c55e,#4ade80)"

            }}
          />





          {/* ===== MODULE HEADER ===== */}

          <div
            style={{

              display: "flex",

              justifyContent:
                "space-between",

              alignItems: "center",

              flexWrap: "wrap",

              gap: "15px",

              marginBottom: "30px"

            }}
          >

            {/* LEFT */}

            <div
              style={{

                display: "flex",

                alignItems: "center",

                gap: "16px"

              }}
            >

              {/* ICON */}

              <div
                style={{

                  width: "65px",

                  height: "65px",

                  borderRadius: "20px",

                  background:
                    "linear-gradient(135deg,#2563eb,#3b82f6)",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  fontSize: "28px",

                  boxShadow:
                    "0 10px 30px rgba(37,99,235,0.4)"

                }}
              >

                🛡️

              </div>




              {/* TEXT */}

              <div>

                <p
                  style={{

                    color: "#60a5fa",

                    fontSize: "14px",

                    marginBottom: "6px",

                    fontWeight: "700",

                    letterSpacing: "0.5px"

                  }}
                >

                  SECURITY MODULE

                </p>

                <h2
                  style={{

                    color: "#ffffff",

                    fontSize: "30px",

                    fontWeight: "800",

                    margin: 0

                  }}
                >

                  {item.module}

                </h2>

              </div>

            </div>





            {/* STATUS */}

            <div
              style={{

                padding:
                  "12px 22px",

                borderRadius: "999px",

                background:
                  item.prediction === "SCAM"
                    ? "rgba(239,68,68,0.12)"
                    : "rgba(34,197,94,0.12)",

                color:
                  item.prediction === "SCAM"
                    ? "#ef4444"
                    : "#22c55e",

                border:
                  item.prediction === "SCAM"
                    ? "1px solid rgba(239,68,68,0.25)"
                    : "1px solid rgba(34,197,94,0.25)",

                fontWeight: "700",

                fontSize: "15px"

              }}
            >

              {item.prediction === "SCAM"
                ? "⚠ Threat Detected"
                : "✔ Safe Content"}

            </div>

          </div>





          {/* ===== TEXT ===== */}

          <div
            style={{

              marginBottom: "30px"

            }}
          >

            <h3
              style={{

                color: "#60a5fa",

                marginBottom: "15px",

                fontSize: "20px"

              }}
            >

              Text:

            </h3>

            <p
              style={{

                color: "#ffffff",

                lineHeight: "1.9",

                fontSize: "18px"

              }}
            >

              {item.text}

            </p>

          </div>





          {/* ===== STATS GRID ===== */}

          <div
            style={{

              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",

              gap: "20px",

              marginBottom: "30px"

            }}
          >

            {/* PREDICTION */}

            <div
              style={{

                background:
                  "rgba(255,255,255,0.03)",

                padding: "22px",

                borderRadius: "22px"

              }}
            >

              <h4
                style={{

                  color: "#60a5fa",

                  marginBottom: "12px",

                  fontSize: "18px"

                }}
              >

                Prediction

              </h4>

              <p
                style={{

                  color:
                    item.prediction === "SCAM"
                      ? "#ef4444"
                      : "#22c55e",

                  fontSize: "28px",

                  fontWeight: "800",

                  margin: 0

                }}
              >

                {item.prediction}

              </p>

            </div>




            {/* PROBABILITY */}

            <div
              style={{

                background:
                  "rgba(255,255,255,0.03)",

                padding: "22px",

                borderRadius: "22px"

              }}
            >

              <h4
                style={{

                  color: "#60a5fa",

                  marginBottom: "12px",

                  fontSize: "18px"

                }}
              >

                Probability

              </h4>

              <p
                style={{

                  color: "#ffffff",

                  fontSize: "28px",

                  fontWeight: "800",

                  margin: 0

                }}
              >

                {item.probability}%

              </p>

            </div>




            {/* TIME */}

            <div
              style={{

                background:
                  "rgba(255,255,255,0.03)",

                padding: "22px",

                borderRadius: "22px"

              }}
            >

              <h4
                style={{

                  color: "#60a5fa",

                  marginBottom: "12px",

                  fontSize: "18px"

                }}
              >

                Time

              </h4>

              <p
                style={{

                  color: "#ffffff",

                  fontSize: "18px",

                  fontWeight: "600",

                  margin: 0

                }}
              >

                {item.time}

              </p>

            </div>

          </div>





          {/* ===== AI ANALYSIS ===== */}

          <div
            style={{

              background:
                "rgba(255,255,255,0.03)",

              padding: "25px",

              borderRadius: "22px",

              border:
                "1px solid rgba(255,255,255,0.04)"

            }}
          >

            <h3
              style={{

                color: "#60a5fa",

                marginBottom: "15px"

              }}
            >

              AI Analysis:

            </h3>

            <p
              style={{

                color: "#dbeafe",

                lineHeight: "1.9",

                fontSize: "17px",

                margin: 0

              }}
            >

              {item.type}

            </p>

          </div>

        </div>

      ))}

    </div>

  );

}

export default History;