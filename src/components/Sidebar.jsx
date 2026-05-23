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