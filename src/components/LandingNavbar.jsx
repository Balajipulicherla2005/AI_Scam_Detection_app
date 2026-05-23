import "./Landing.css";

const LandingNavbar = () => {

  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="landing-navbar">

      <div className="nav-logo">
        🛡️ AI Scam Detection 
      </div>

      <div className="nav-links">

        {/* <button
          onClick={() =>
            scrollToSection("workflow")
          }
        >
          Workflow
        </button> */}

        <button
          onClick={() =>
            scrollToSection(
              "how-it-works"
            )
          }
        >
          How It Works
        </button>

        <button
          onClick={() =>
            scrollToSection("features")
          }
        >
          Features
        </button>

        <a href="/login">
          Login
        </a>

        <a
          href="/register"
          className="get-started-btn"
        >
          Get Started
        </a>

      </div>

    </nav>
  );
};

export default LandingNavbar;