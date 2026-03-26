// function Footer(){

// return(

// <footer className="footer">

// <p> <center>
// © 2026 AI Scam Detection Platform
// </center>
// </p>

// </footer>

// )

// }

// export default Footer























// function Footer(){

// return(


// <footer className="footer">

// <div className="footer-content">

// <div className="footer-left">
// 🛡 AI Scam Detection Platform
// </div>

// <div className="footer-center">
// © 2026 All rights reserved
// </div>

// </div>

// </footer>

// )

// }

// export default Footer












// function Footer() {
//   return (
//     <footer className="footer">
//       <p>© 2026 AI Scam Detection Platform. All rights reserved.</p>
//     </footer>
//   )
// }

// export default Footer















// function Footer() {

// return (

// <footer className="footer">

// <div className="footer-cta">

// <h2>Ready to Stay Safe Online?</h2>

// <p>
// Use AI Scam Detection to identify phishing, fraud and scam messages instantly.
// </p>

// <div className="footer-buttons">
// <button className="btn-primary">Try Detector</button>
// <button className="btn-outline">Ask AI Assistant</button>
// </div>

// </div>


// <div className="footer-grid">

// <div className="footer-col">

// <h3>🛡 AI Scam Detection</h3>

// <p>
// Protect users from phishing, scam calls and fraudulent links using AI powered tools.
// </p>

// </div>


// <div className="footer-col">

// <h3>Quick Links</h3>

// <p>AI Scam Detector</p>
// <p>AI Chatbot</p>
// <p>URL Scanner</p>
// <p>Voice Detection</p>

// </div>


// <div className="footer-col">

// <h3>Contact</h3>

// <p>Email: support@aiscam.ai</p>
// <p>Phone: +91 98765 43210</p>

// </div>

// </div>


// <div className="footer-bottom">

// <p>© 2026 AI Scam Detection Platform. All rights reserved.</p>

// </div>

// </footer>

// )

// }

// export default Footer


















// import { Link } from "react-router-dom"
// import "./footer.css"

// function Footer(){

// return(

// <footer className="footer">

// {/* CTA SECTION */}

// <div className="footer-cta">

// <h2>Ready to Stay Safe Online?</h2>

// <p>
// Use AI Scam Detection to identify phishing, fraud and scam messages instantly.
// </p>

// <div className="cta-buttons">

// <Link to="/scam">
// <button className="cta-btn primary">Try Detector</button>
// </Link>

// <Link to="/chatbot">
// <button className="cta-btn secondary">Ask AI Assistant</button>
// </Link>

// </div>

// </div>


// {/* FOOTER GRID */}

// <div className="footer-container">

// <div className="footer-col">

// <h3>🛡 AI Scam Detection</h3>

// <p>
// Protect users from phishing, scam calls and fraudulent links using AI powered tools.
// </p>

// </div>


// <div className="footer-col">

// <h3>Quick Links</h3>

// <Link to="/">Dashboard</Link>
// <Link to="/scam">AI Scam Detector</Link>
// <Link to="/chatbot">AI Chatbot</Link>
// <Link to="/url">URL Scanner</Link>
// <Link to="/voice">Voice Detection</Link>

// </div>


// <div className="footer-col">

// <h3>Contact</h3>

// <p>Email: support@aiscam.ai</p>
// <p>Phone: +91 98765 43210</p>

// </div>

// </div>


// <div className="footer-bottom">
// © 2026 AI Scam Detection Platform. All rights reserved.
// </div>

// </footer>

// )

// }

// export default Footer











import { Link } from "react-router-dom"
import "./footer.css"

function Footer(){

return(

<footer className="footer">

{/* CTA SECTION */}

<div className="footer-cta">

<h2>Ready to Stay Safe Online?</h2>

<p>
Use AI Scam Detection to identify phishing, fraud and scam messages instantly.
</p>

<div className="cta-buttons">

<Link to="/detector">
<button className="cta-btn primary">Try Detector</button>
</Link>

<Link to="/assistant">
<button className="cta-btn secondary">Ask AI Assistant</button>
</Link>

</div>

</div>


{/* FOOTER GRID */}

<div className="footer-container">

<div className="footer-col">

<h3>🛡 AI Scam Detection</h3>

<p>
Protect users from phishing, scam calls and fraudulent links using AI powered tools.
</p>

</div>


<div className="footer-col">

<h3>Quick Links</h3>

<Link to="/">Dashboard</Link>
<Link to="/detector">AI Scam Detector</Link>
<Link to="/assistant">AI Chatbot</Link>
<Link to="/url-scanner">URL Scanner</Link>
<Link to="/voice">Voice Detection</Link>
<Link to="/history">History</Link>

</div>


<div className="footer-col">

<h3>Contact</h3>

<p>Email: support@aiscam.ai</p>
<p>Phone: +91 98765 43210</p>

</div>

</div>


<div className="footer-bottom">
© 2026 AI Scam Detection Platform. All rights reserved.
</div>

</footer>

)

}

export default Footer