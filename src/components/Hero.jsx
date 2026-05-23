import "./Landing.css";

const Hero = () => {
  return (
    <section
      className="hero-section"
    >
      <div className="hero-content">

        <div className="hero-badge">
          🛡️ AI Powered Security
        </div>

        <h1>
          Protect Yourself
          <span>
            From Online Scams
          </span>
        </h1>

        <p>
          Detect phishing links,
          fake messages,
          suspicious voice calls,
          and online fraud
          instantly using AI.
        </p>

        <div className="hero-buttons">

          <a
            href="/register"
            className="primary-btn"
          >
            Get Started
          </a>

          <a
            href="/login"
            className="secondary-btn"
          >
            Login
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;