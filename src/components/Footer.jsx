import "./footer.css";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  auth
} from "../firebase";

function Footer() {

  const navigate =
    useNavigate();

  const handleProtectedRoute =
    (path) => {

      if (
        auth.currentUser
      ) {

        navigate(path);

      } else {

        alert(
          "Please login first"
        );

        navigate(
          "/register"
        );
      }
    };

  return (

    <footer className="footer">

      {/* CTA SECTION */}

      <div className="footer-cta">

        <h2>
          Ready to Stay Safe Online?
        </h2>

        <p>
          Use AI Scam Detection to identify phishing,
          fraud and scam messages instantly.
        </p>

        {/* <div className="cta-buttons">

          <button
            className="cta-btn primary"
            onClick={() =>
              handleProtectedRoute(
                "/detector"
              )
            }
          >
            Try Detector
          </button>

          <button
            className="cta-btn secondary"
            onClick={() =>
              handleProtectedRoute(
                "/assistant"
              )
            }
          >
            Ask AI Assistant
          </button>
 */}
        {/* </div> */}

      </div>

      {/* OPTIONAL FOOTER LINKS */}

      {/*
      <div className="footer-container">

        <div className="footer-col">

          <h3>
            🛡 AI Scam Detection
          </h3>

          <p>
            Protect users from phishing,
            scam calls and fraudulent links
            using AI powered tools.
          </p>

        </div>

        <div className="footer-col">

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Dashboard
          </Link>

          <Link to="/detector">
            Check Message
          </Link>

          <Link to="/assistant">
            AI Chatbot
          </Link>

          <Link to="/url-scanner">
            Check Link
          </Link>

          <Link to="/voice">
            Check Voice
          </Link>

          <Link to="/history">
            History
          </Link>

        </div>

        <div className="footer-col">

          <h3>
            Contact
          </h3>

          <p>
            Email:
            support@aiscam.ai
          </p>

          <p>
            Phone:
            +91 98765 43210
          </p>

        </div>

      </div>
      */}

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        © 2026 AI Scam Detection Platform.
        All rights reserved.

      </div>

    </footer>

  );

}

export default Footer;
