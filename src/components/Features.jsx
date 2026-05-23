import "./Features.css";

const Features = () => {
  return (
    <section
      id="features"
      className="features"
    >
      <div className="section-header">

        <div className="section-badge">
          Platform Features
        </div>

        <h2>
          Powerful Security Features
        </h2>

        <p>
          Advanced AI-powered tools
          designed to protect users
          from online fraud and
          phishing attacks.
        </p>

      </div>

      <div className="features-grid">

        <div className="feature-card">

          <div className="feature-number">
            01
          </div>

          <div className="feature-icon">
            🔗
          </div>

          <h3>
            AI URL Scanner
          </h3>

          <p>
            Detect fake websites,
            phishing links,
            suspicious domains,
            and scam URLs instantly.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-number">
            02
          </div>

          <div className="feature-icon">
            💬
          </div>

          <h3>
            Message Detection
          </h3>

          <p>
            Analyze suspicious
            SMS, emails, and
            fraud messages using AI.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-number">
            03
          </div>

          <div className="feature-icon">
            🎤
          </div>

          <h3>
            Voice Scam Detection
          </h3>

          <p>
            Detect fake calls,
            voice phishing,
            and scam conversations.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-number">
            04
          </div>

          <div className="feature-icon">
            🤖
          </div>

          <h3>
            AI Assistant
          </h3>

          <p>
            Ask AI questions about
            scams and receive
            easy safety explanations.
            Multi-languages support, Text-to-speech response,
            The response is displayed as text and can also be 
            spoken aloud depending on the language selected by the user.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-number">
            05
          </div>

          <div className="feature-icon">
            ⚡
          </div>

          <h3>
            Real-Time Detection
          </h3>

          <p>
            Instant AI analysis
            with scam probability,
            threat level,
            and recommendations.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-number">
            06
          </div>

          <div className="feature-icon">
            🔒
          </div>

          <h3>
            Secure & Private
          </h3>

          <p>
            User data remains secure
            with encrypted and
            privacy-focused protection.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Features;