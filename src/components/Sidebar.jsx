// import { FaShieldAlt, FaRobot, FaLink, FaMicrophone, FaHistory } from "react-icons/fa";

// function Sidebar(){

// return(

// <div className="sidebar">

// <h2>🛡 ScamShield AI</h2>

// <ul>

// <li>Dashboard</li>
// <li>AI Scam Detector</li>
// <li>AI Assistant</li>
// <li>URL Scanner</li>
// <li>Voice Detection</li>
// <li>History</li>

// </ul>

// </div>

// )

// }

// export default Sidebar






import { Link } from "react-router-dom"
import { FaShieldAlt, FaRobot, FaLink, FaMicrophone, FaHistory, FaChartBar } from "react-icons/fa"

function Sidebar(){

return(

<div className="sidebar">

<h2>🛡 ScamShield</h2>

<nav>

<Link to="/">
<FaChartBar/> Dashboard
</Link>

<Link to="/detector">
<FaShieldAlt/> Scam Detector
</Link>

<Link to="/chatbot">
<FaRobot/> AI Assistant
</Link>

<Link to="/url">
<FaLink/> URL Scanner
</Link>

<Link to="/voice">
<FaMicrophone/> Voice Detection
</Link>

<Link to="/history">
<FaHistory/> History
</Link>

</nav>

</div>

)

}

export default Sidebar