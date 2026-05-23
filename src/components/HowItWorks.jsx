import "./HowItWorks.css";

const steps = [

  {
    number: "01",
    icon: "📩",
    title: "Upload Content",
    text:
      "Paste suspicious messages, phishing links, or voice recordings for AI analysis.",
  },

  {
    number: "02",
    icon: "🤖",
    title: "AI Security Scan",
    text:
      "AI checks phishing patterns, fake domains, urgency tactics, and scam indicators instantly.",
  },

  {
    number: "03",
    icon: "📊",
    title: "Threat Analysis",
    text:
      "Advanced AI generates scam probability, threat level, trust score, and recommendations.",
  },

  {
    number: "04",
    icon: "🛡️",
    title: "Final AI Verdict",
    text:
      "Users receive SAFE or SCAM results with security score and personalized safety guidance.",
  },

];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="how-it-works"
    >

      <div className="how-header">

        <div className="how-badge">
          AI Protection
        </div>

        <h2>
          How AI Scam Detection Works
        </h2>

        <p>
          Our AI system analyzes
          suspicious messages,
          websites, and voice calls
          in real-time to protect
          users from phishing,
          fraud, and online scams.
        </p>

      </div>

      <div className="how-grid">

        {steps.map((step) => (

          <div
            key={step.number}
            className="how-card"
          >

            <div className="step-number">
              {step.number}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>
              {step.title}
            </h3>

            <p>
              {step.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default HowItWorks;