
import "./url.css";

import { auth } from "../firebase";

import { useState } from "react";

function URLScanner() {

  const [domainAge, setDomainAge] =
    useState("Unknown");

  const [scanTime, setScanTime] =
    useState("0.0");

  const [securityScore, setSecurityScore] =
    useState(0);

  const [recommendation, setRecommendation] =
    useState("");

  const [category, setCategory] =
    useState("Unknown");

  const [url, setUrl] =
    useState("");

  const [result, setResult] =
    useState(null);

  const [copied, setCopied] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [sslStatus, setSslStatus] =
    useState(false);




  // ================= GET HOSTNAME =================

  const getHostname = (inputUrl) => {

    try {

      let fixedUrl = inputUrl;

      if (
        !fixedUrl.startsWith("http://") &&
        !fixedUrl.startsWith("https://")
      ) {

        fixedUrl =
          "https://" + fixedUrl;

      }

      const parsed =
        new URL(fixedUrl);

      return parsed.hostname
        .replace("www.", "")
        .toLowerCase();

    } catch {

      return "";

    }

  };



  const hostname =
    getHostname(url);




  // ================= SCAN URL =================

  const scan = async () => {

    if (!url.trim()) return;

    setLoading(true);



    const start =
      performance.now();




    let risk = 0;

    let safe = true;

    let reputation =
      "Trusted Domain";

    let phishingIndicators = [];

    let aiAnalysis = [];




    // ================= TRUSTED DOMAINS =================

    const trustedDomains = [

      "google.com",
      "youtube.com",
      "github.com",
      "microsoft.com",
      "openai.com",
      "facebook.com",
      "instagram.com",
      "amazon.com",
      "netflix.com",
      "linkedin.com",
      "apple.com",
      "chatgpt.com",
      "paypal.com",
      "whatsapp.com"

    ];




    // ================= SUSPICIOUS WORDS =================

    const suspiciousWords = [

      "login",
      "verify",
      "secure",
      "update",
      "bank",
      "bonus",
      "reward",
      "crypto",
      "wallet",
      "free"

    ];




    // ================= CATEGORY =================

    if (

      hostname.includes("youtube") ||
      hostname.includes("netflix")

    ) {

      setCategory(
        "Entertainment"
      );

    }

    else if (

      hostname.includes("github") ||
      hostname.includes("openai")

    ) {

      setCategory(
        "Technology"
      );

    }

    else if (

      hostname.includes("amazon")

    ) {

      setCategory(
        "Shopping"
      );

    }

    else if (

      hostname.includes("bank")

    ) {

      setCategory(
        "Banking"
      );

    }

    else {

      setCategory(
        "General Website"
      );

    }




    // ================= SSL CHECK =================

    if (
      url.startsWith("https://")
    ) {

      setSslStatus(true);

    }

    else {

      setSslStatus(false);

      risk += 30;

      phishingIndicators.push(
        "Website not using HTTPS"
      );

      aiAnalysis.push(
        "Connection is not secure"
      );

    }




    // ================= TRUSTED DOMAIN =================

    const isTrusted =

      trustedDomains.includes(
        hostname
      ) ||

      trustedDomains.some(
        domain =>
          hostname.endsWith(
            "." + domain
          )
      );




    // ================= RANDOM DOMAIN =================

    if (

      hostname.length > 18 &&
      !isTrusted

    ) {

      risk += 20;

      phishingIndicators.push(
        "Long suspicious domain"
      );

    }




    // ================= NUMBERS =================

    if (/\d/.test(hostname)) {

      risk += 15;

      phishingIndicators.push(
        "Numbers detected in domain"
      );

    }




    // ================= HYPHENS =================

    const hyphenCount =
      (hostname.match(/-/g) || []).length;

    if (hyphenCount >= 2) {

      risk += 20;

      phishingIndicators.push(
        "Too many hyphens in domain"
      );

    }




    // ================= SUSPICIOUS WORDS =================

    suspiciousWords.forEach((word) => {

      if (

        hostname.includes(word) &&
        !isTrusted

      ) {

        risk += 15;

        phishingIndicators.push(
          `Suspicious keyword: ${word}`
        );

      }

    });




    // ================= SHORTENER =================

    if (

      hostname.includes("bit.ly") ||
      hostname.includes("tinyurl")

    ) {

      risk += 50;

      phishingIndicators.push(
        "Shortened URL detected"
      );

    }




    // ================= FINAL RESULT =================

    if (
      isTrusted &&
      risk <= 20
    ) {

      safe = true;

      risk = 5;

      reputation =
        "Trusted Domain";

      aiAnalysis = [

        "Trusted official domain",
        "HTTPS protection enabled",
        "No phishing patterns found"

      ];

    }

    else if (risk >= 60) {

      safe = false;

      reputation =
        "Dangerous Domain";

      aiAnalysis.push(
        "High-risk phishing website detected"
      );

    }

    else {

      safe = true;

      reputation =
        "Medium Risk Domain";

      aiAnalysis.push(
        "Minor suspicious indicators detected"
      );

    }




    // ================= SCORE =================

    setSecurityScore(
      100 - risk
    );




    // ================= RECOMMENDATION =================

    if (safe) {

      setRecommendation(
        "Safe website detected. No suspicious activity found."
      );

    }

    else {

      setRecommendation(
        "Avoid entering passwords, OTPs, or payment details."
      );

    }




    // ================= DOMAIN AGE =================

    try {

      const res = await fetch(
        "http://localhost:5000/api/domain-info",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            url
          })
        }
      );



      if (res.ok) {

        const data =
          await res.json();

        setDomainAge(
          data.age || "Unknown"
        );

      }

    } catch (err) {

      console.log(err);

    }




    // ================= SCAN SPEED =================

    const end =
      performance.now();

    setScanTime(
      ((end - start) / 1000)
      .toFixed(2)
    );




    // ================= SET RESULT =================

    const finalResult = {

      safe,
      risk,
      reputation,
      phishingIndicators,
      aiAnalysis

    };



    setResult(finalResult);

    setLoading(false);




    // ================= SAVE HISTORY =================

    const userEmail =
      auth.currentUser?.email;

    const historyKey =
      `scamHistory_${userEmail}`;

    const history =
      JSON.parse(
        localStorage.getItem(historyKey)
      ) || [];



    history.unshift({

      module:
        "URL Scanner",

      text: url,

      prediction:
        safe ? "SAFE" : "SCAM",

      probability: risk,

      type: reputation,

      time:
        new Date().toLocaleString()

    });



    localStorage.setItem(

      historyKey,

      JSON.stringify(history)

    );

  };




  return (

    <div className="page-container">

      {/* ===== PAGE TITLE ===== */}

      <h1 className="page-title">
        🔗 AI URL Scanner
      </h1>

      <p className="page-subtitle">

        Scan suspicious websites,
        phishing links,
        and dangerous domains
        using AI-powered security analysis.

      </p>




      {/* ===== SEARCH BOX ===== */}

      <div className="url-search-box">

        <input

          className="url-search-input"

          placeholder="Enter suspicious URL"

          value={url}

          onChange={(e) =>
            setUrl(
              e.target.value
            )
          }

        />



        <button
          className="url-search-btn"
          onClick={scan}
        >

          🔍 Scan URL

        </button>




        <button

          className="copy-btn"

          onClick={() => {

            navigator.clipboard
              .writeText(url);

            setCopied(true);

            setTimeout(() => {

              setCopied(false);

            }, 2000);

          }}

        >

          📋 Copy URL

        </button>




        <button

          className="visit-btn"

          onClick={() =>
            window.open(
              url,
              "_blank"
            )
          }

        >

          🌐 Visit Website

        </button>

      </div>




      {/* ===== COPY ===== */}

      {copied && (

        <p className="copy-text">
          ✅ URL copied
        </p>

      )}




      {/* ===== LOADING ===== */}

      {loading && (

        <div className="scan-loader">

          <div className="loader-circle"></div>

          <p>
            AI scanning website...
          </p>

        </div>

      )}




      {/* ===== RESULT ===== */}

      {result && (

        <>

          {/* ===== AI VERDICT CARD ===== */}

          <div className="verdict-card">

            <div className="verdict-top">

              <div>

                <h2 className="verdict-title">

                  {result.safe
                    ? "🟢 AI Verdict: SAFE"
                    : "🔴 AI Verdict: SCAM"}

                </h2>

                <p className="verdict-subtitle">

                  {result.safe

                    ? "This website appears legitimate and secure."

                    : "Suspicious phishing indicators detected by AI."}

                </p>

              </div>



              {/* SECURITY BADGES */}

              <div className="badge-row">

                <div className="status-badge ssl">

                  🔒 SSL Protected

                </div>

                <div className="status-badge ai">

                  🤖 AI Verified

                </div>

                <div className="status-badge threat">

                  🛡 Threat Protected

                </div>

              </div>

            </div>

          </div>




          {/* ===== RESULT CARDS ===== */}

          <div className="result-section">

            {/* CATEGORY */}

            <div className="result-card">

              <h3>
                🌍 Website Category
              </h3>

              <p>
                {category}
              </p>

            </div>




            {/* URL REPUTATION */}

            <div className="result-card">

              <h3>
                🔒 URL Reputation
              </h3>

              <p
                className={
                  result.safe
                    ? "safe-text"
                    : "danger-text"
                }
              >

                {result.safe

                  ? "✓ Trusted Domain"

                  : `⚠ ${result.reputation}`}

              </p>

            </div>




            {/* PHISHING */}

            <div className="result-card">

              <h3>
                ⚠️ Phishing Indicators
              </h3>

              {result.phishingIndicators
                .length === 0 ? (

                <p className="safe-text">
                  ✅ No phishing indicators
                </p>

              ) : (

                result.phishingIndicators.map(
                  (item, index) => (

                    <p
                      key={index}
                      className="danger-text"
                    >
                      ⚠ {item}
                    </p>

                  )
                )

              )}

            </div>




            {/* DOMAIN INFO */}

            <div className="result-card">

              <h3>
                🌐 Domain Information
              </h3>

              <p>
                <b>Domain:</b>
                {" "}
                {hostname}
              </p>

              <p>

                <b>SSL:</b>

                {sslStatus

                  ? " 🔒 Secure HTTPS"

                  : " ⚠ Not Secure"}

              </p>

              <p>
                <b>Domain Age:</b>
                {" "}
                {domainAge}
              </p>

              <p>
                <b>Scan Speed:</b>
                {" "}
                {scanTime}s
              </p>

            </div>




            {/* SECURITY */}

            <div className="result-card">

              <h3>
                🛡️ Security Indicators
              </h3>

              <p>

                {sslStatus

                  ? "✔ HTTPS Enabled"

                  : "⚠ HTTP Website"}

              </p>

              <p>

                {result.safe

                  ? "✔ Trusted Domain"

                  : "⚠ Untrusted Domain"}

              </p>

              <p>

                {result.safe

                  ? "✔ No Malware Detected"

                  : "⚠ Suspicious Activity"}

              </p>

            </div>




            {/* AI ANALYSIS */}

            <div className="result-card">

              <h3>
                🤖 AI Analysis
              </h3>

              {result.aiAnalysis.map(
                (item, index) => (

                  <p key={index}>
                    {item}
                  </p>

                )
              )}

            </div>

          </div>




          {/* ===== SECURITY SCORE ===== */}

          <div className="security-score-card">

            <h2>
              🛡 AI Security Score
            </h2>

            <div className="score-circle">

              {securityScore}/100

            </div>

          </div>




          {/* ===== AI RECOMMENDATION ===== */}

          <div className="recommendation-card">

            <h2>
              🧠 AI Recommendation
            </h2>

            <p>
              {recommendation}
            </p>

          </div>

        </>

      )}

    </div>

  );

}

export default URLScanner;