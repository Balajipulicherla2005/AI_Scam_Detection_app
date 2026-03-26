// function Navbar(){

// return(

// <div className="navbar">

// <input
// type="text"
// placeholder="Search threats..."
// />

// <div className="user">
// Admin
// </div>

// </div>

// )

// }

// export default Navbar




// import { Link } from "react-router-dom"
// import "./navbar.css"

// function Navbar(){

// return(

//  <div className="navbar">

//  <div className="logo">
// 🛡 AI Scam detection 
// </div>  
 
// {/* <Link to="/" className="logo">
//     🛡 AI Scam detection
// </Link>
//  */}

// <div className="nav-links">

// <Link to="/">Dashboard</Link>
// <Link to="/detector">AI Scam Detector</Link>
// <Link to="/chatbot">AI Assistant</Link>
// <Link to="/url">URL Scanner</Link>
// <Link to="/voice">Voice Detection</Link>
// <Link to="/history">History</Link>

// </div>

// </div>

// )

// }

// export default Navbar










// import { NavLink } from "react-router-dom"

// function Navbar(){

// return(

// <div className="navbar">

// <div className="logo">
// 🛡 AI Scam detection
// </div>

// <div className="nav-links">

// <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
// Dashboard
// </NavLink>

// <NavLink to="/detector" className={({isActive}) => isActive ? "active" : ""}>
// AI Scam Detector
// </NavLink>

// <NavLink to="/assistant" className={({isActive}) => isActive ? "active" : ""}>
// AI Assistant
// </NavLink>

// <NavLink to="/url-scanner" className={({isActive}) => isActive ? "active" : ""}>
// URL Scanner
// </NavLink>

// <NavLink to="/voice" className={({isActive}) => isActive ? "active" : ""}>
// Voice Detection
// </NavLink>

// <NavLink to="/history" className={({isActive}) => isActive ? "active" : ""}>
// History
// </NavLink>

// </div>

// </div>

// )

// }

// export default Navbar









// import { NavLink } from "react-router-dom"

// function Navbar(){

// return(

// <div className="navbar">

// <div className="logo">
// 🛡 AI Scam detection
// </div>

// <div className="nav-links">

// <NavLink to="/" end>
// Dashboard
// </NavLink>

// <NavLink to="/detector">
// AI Scam Detector
// </NavLink>

// <NavLink to="/assistant">
// AI Assistant
// </NavLink>

// <NavLink to="/url-scanner">
// URL Scanner
// </NavLink>

// <NavLink to="/voice">
// Voice Detection
// </NavLink>

// <NavLink to="/history">
// History
// </NavLink>

// </div>

// </div>

// )

// }

// export default Navbar












import { NavLink } from "react-router-dom"
import "./navbar.css"

function Navbar(){

return(

<div className="navbar">

<div className="logo">
🛡 AI Scam detection
</div>

<div className="nav-links">

<NavLink to="/" end>Dashboard</NavLink>

<NavLink to="/detector">AI Scam Detector</NavLink>

<NavLink to="/assistant">AI Assistant</NavLink>

<NavLink to="/url-scanner">URL Scanner</NavLink>

<NavLink to="/voice">Voice Detection</NavLink>

<NavLink to="/history">History</NavLink>

</div>

</div>

)

}

export default Navbar