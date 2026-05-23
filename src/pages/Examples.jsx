import "../pages/ui.css";

const examples = [
  {
    text: "You won ₹10,00,000 lottery! Click link now",
    type: "Lottery Scam",
    result: "SCAM"
  },
  {
    text: "Your bank account blocked. Share OTP immediately",
    type: "Bank Scam",
    result: "SCAM"
  },
  {
    text: "Amazon delivery arriving today",
    type: "Normal Message",
    result: "SAFE"
  }
];

function Examples() {
  return (
    <div className="guide-page">
      <h1>📚 Scam Examples</h1>

      <div className="steps">
        {examples.map((ex, i) => (
          <div key={i} className="step-card">
            <p><b>Message:</b> {ex.text}</p>
            <p><b>Type:</b> {ex.type}</p>
            <h3 style={{ color: ex.result === "SCAM" ? "red" : "green" }}>
              {ex.result === "SCAM" ? "❌ Scam" : "✅ Safe"}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Examples;