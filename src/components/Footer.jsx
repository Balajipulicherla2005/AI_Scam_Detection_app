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

      </div>

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        © 2026 AI Scam Detection Platform.
        All rights reserved.

      </div>

    </footer>

  );
}

export default Footer;
