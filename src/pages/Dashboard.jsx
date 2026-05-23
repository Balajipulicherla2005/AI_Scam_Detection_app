import { useNavigate } from "react-router-dom";

import {
  FaShieldAlt,
  FaCommentDots,
  FaLink,
  FaMicrophone,
  FaRobot,
  FaHistory,
  FaArrowRight
} from "react-icons/fa";

import "./dashboard-fullwidth.css";

function Dashboard() {

  const navigate =
    useNavigate();

  // ===== DASHBOARD CARDS =====

  const cards = [

    {

      title: "Check Message",

      desc:
        "Analyze suspicious SMS, emails, and phishing messages instantly.",

      icon: <FaCommentDots />,

      link: "/detector"

    },

    {

      title: "Check Link",

      desc:
        "Scan URLs and detect dangerous phishing websites in seconds.",

      icon: <FaLink />,

      link: "/url-scanner"

    },

    {

      title: "Check Voice",

      desc:
        "Analyze scam calls and suspicious voice recordings with AI.",

      icon: <FaMicrophone />,

      link: "/voice"

    },

    {

      title: "Ask AI Assistant",

      desc:
        "Get intelligent cybersecurity help and scam guidance instantly.",

      icon: <FaRobot />,

      link: "/assistant"

    },

    {

      title: "Detection History",

      desc:
        "View all your previous scam detections and AI reports.",

      icon: <FaHistory />,

      link: "/history"

    },

    {

      title: "AI Risk Score",

      desc:
        "Get an instant AI-powered trust score for suspicious messages, links, and online activity.",

      icon: <FaShieldAlt />,

      link: "/url-scanner"

    }

  ];



  return (

    <div className="dashboard-page">

      {/* ===== FULL WIDTH WRAPPER ===== */}

      <div className="dashboard-wrapper">




        {/* ===== HERO SECTION ===== */}

        <div className="dashboard-hero">

          {/* LEFT SIDE */}

          <div className="hero-left">

            <div className="hero-badge">

              <FaShieldAlt />

              AI Security Dashboard

            </div>

            <h1 className="dashboard-title">

              ScamShield Dashboard

            </h1>

            <p className="dashboard-subtitle">

              Protect yourself from phishing,
              scam links, fake messages,
              fraudulent calls, and online threats
              using intelligent AI-powered tools.

            </p>

          </div>




          {/* RIGHT SIDE CARD */}

          <div className="hero-stat-card">

            <h3>
              95.9% 
            </h3>

            <p>
             Scam Detection Accuracy
            </p>

          </div>

        </div>





        {/* ===== DASHBOARD GRID ===== */}

        <div className="dashboard-grid">

          {cards.map((card, index) => (

            <div

              key={index}

              className="dashboard-card"

              onClick={() =>
                navigate(card.link)
              }

            >

              {/* ===== ICON ===== */}

              <div className="card-icon">

                {card.icon}

              </div>





              {/* ===== TITLE ===== */}

              <h2 className="card-title">

                {card.title}

              </h2>





              {/* ===== DESCRIPTION ===== */}

              <p className="card-description">

                {card.desc}

              </p>





              {/* ===== BUTTON ===== */}

              <button

                className="open-tool-btn"

                onClick={(e) => {

                  e.stopPropagation();

                  navigate(card.link);

                }}

              >

                Open Tool

                <FaArrowRight />

              </button>

            </div>

          ))}

        </div>





        {/* ===== SECURITY INFO SECTION ===== */}

        <div className="security-section">

          <div className="security-card">

            <h3>
              ⚡ Real-Time AI Detection
            </h3>

            <p>

              Advanced AI continuously scans
              suspicious messages, links,
              and scam activity patterns.

            </p>

          </div>





          <div className="security-card">

            <h3>
              🔒 Privacy Protected
            </h3>

            <p>

              Your scans and detection history
              stay securely stored under your
              own account only.

            </p>

          </div>





          <div className="security-card">

            <h3>
              🛡 Smart Scam Prevention
            </h3>

            <p>

              Detect phishing, fake websites,
              impersonation attacks, and
              online fraud instantly.

            </p>

          </div>




          <div className="security-card">

            <h3>
              🧑‍💻 Identity Protection
            </h3>

            <p>

              Protect personal information from
              impersonation attacks,
              phishing attempts,
              and online fraud.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;
