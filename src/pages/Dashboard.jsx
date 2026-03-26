// function Dashboard(){

// return(

// <div className="dashboard">

// <h1>Dashboard</h1>

// <div className="cards">

// <div className="card">
// <h2>1247</h2>
// <p>Scams Detected</p>
// </div>

// <div className="card">
// <h2>45.2K</h2>
// <p>Messages Analyzed</p>
// </div>

// <div className="card">
// <h2>89</h2>
// <p>Suspicious Profiles</p>
// </div>

// <div className="card">
// <h2>156</h2>
// <p>Malicious Links</p>
// </div>

// </div>

// </div>

// )

// }

// export default Dashboard
















// import { Bar } from "react-chartjs-2"
// import "chart.js/auto"

// function Dashboard(){

// const data = {

// labels:["00:00","04:00","08:00","12:00","16:00","20:00"],

// datasets:[{
// label:"Threat Detection",
// data:[12,8,25,34,28,31],
// backgroundColor:"#ef4444"
// }]

// }

// return(

// <div>

// <h1>Dashboard</h1>

// <div className="cards">

// <div className="card">
// <h2>1,247</h2>
// <p>Scams Detected</p>
// </div>

// <div className="card">
// <h2>45.2K</h2>
// <p>Messages Analyzed</p>
// </div>

// <div className="card">
// <h2>89</h2>
// <p>Suspicious Profiles</p>
// </div>

// <div className="card">
// <h2>156</h2>
// <p>Malicious Links</p>
// </div>

// </div>

// <div className="chart">

// <Bar data={data}/>

// </div>

// </div>

// )

// }

// export default Dashboard








// import { useState } from "react"

// function Dashboard(){

// const [history,setHistory] = useState([])

// return(

// <div style={{padding:"30px"}}>

// <h2>Detection History</h2>

// <table border="1">
// <thead>
// <tr>
// <th>Message</th>
// <th>Prediction</th>
// <th>Probability</th>
// </tr>
// </thead>

// <tbody>
// {history.map((item,index)=>(
// <tr key={index}>
// <td>{item.message}</td>
// <td>{item.prediction}</td>
// <td>{item.probability}%</td>
// </tr>
// ))}
// </tbody>

// </table>

// </div>

// )

// }

// export default Dashboard















// import { useEffect, useState } from "react"

// function Dashboard(){

// const [history,setHistory] = useState([])

// useEffect(()=>{

// const stored = JSON.parse(localStorage.getItem("scanHistory")) || []
// setHistory(stored)

// },[])

// return(

// <div className="history-page">

// <h1>📊 Detection History</h1>

// <div className="history-card">

// <table>

// <thead>
// <tr>
// <th>Message</th>
// <th>Prediction</th>
// <th>Probability</th>
// </tr>
// </thead>

// <tbody>

// {history.length === 0 ? (

// <tr>
// <td colSpan="3" style={{textAlign:"center"}}>
// No scans yet
// </td>
// </tr>

// ) : (

// history.map((item,index)=>(

// <tr key={index}>

// <td>{item.message}</td>

// <td
// style={{
// color: item.prediction === "SCAM" ? "#ff4d4d" : "#22c55e",
// fontWeight:"bold"
// }}
// >

// {item.prediction === "SCAM"
// ? "🚨 SCAM"
// : "✅ SAFE"}

// </td>

// <td>{item.probability}%</td>

// </tr>

// ))

// )}

// </tbody>

// </table>

// </div>

// </div>

// )

// }

// export default Dashboard















// import { Link } from "react-router-dom"

// function Dashboard(){

// return(

// <div className="dashboard-page">

// <h1>🛡 AI Scam Detection Platform</h1>

// <p className="dashboard-subtitle">
// Advanced AI cybersecurity tools to detect scams and phishing attacks
// </p>

// <div className="dashboard-grid">

// <Link to="/scam-detector" className="dashboard-card">
// <h2>🤖 AI Scam Detector</h2>
// <p>Analyze suspicious messages using AI</p>
// </Link>

// <Link to="/ai-assistant" className="dashboard-card">
// <h2>💬 AI Chatbot</h2>
// <p>Ask AI about scams and cybersecurity threats</p>
// </Link>

// <Link to="/url-scanner" className="dashboard-card">
// <h2>🔗 URL Scanner</h2>
// <p>Scan links for phishing and malicious activity</p>
// </Link>

// <Link to="/voice-detection" className="dashboard-card">
// <h2>🎤 Voice Scam Detection</h2>
// <p>Detect scam patterns in voice calls</p>
// </Link>

// <Link to="/history" className="dashboard-card">
// <h2>📊 Scam History Dashboard</h2>
// <p>View previous scam detections and analytics</p>
// </Link>

// <div className="dashboard-card">
// <h2>📈 Scam Probability Meter</h2>
// <p>Real-time risk scoring using AI analysis</p>
// </div>

// <div className="dashboard-card">
// <h2>⚠ Scam Type Detection</h2>
// <p>Identify phishing, lottery, banking scams</p>
// </div>

// </div>

// </div>

// )

// }

// export default Dashboard




















// import { Link } from "react-router-dom"

// function Dashboard(){

// return(

// <div className="dashboard-container">

// <h1 className="dashboard-title">
// 🛡 AI Scam Detection Platform
// </h1>

// <p className="dashboard-subtitle">
// Advanced AI cybersecurity tools to detect scams and phishing attacks
// </p>


// <div className="features-grid">

// <Link to="/scam-detector" className="feature-card">
// <div className="icon">🤖</div>
// <h3>AI Scam Detector</h3>
// <p>Analyze suspicious messages using AI</p>
// </Link>


// <Link to="/ai-assistant" className="feature-card">
// <div className="icon">💬</div>
// <h3>AI Chatbot</h3>
// <p>Ask AI about scams and cybersecurity threats</p>
// </Link>


// <Link to="/url-scanner" className="feature-card">
// <div className="icon">🔗</div>
// <h3>URL Scanner</h3>
// <p>Scan links for phishing and malicious activity</p>
// </Link>


// <Link to="/voice-detection" className="feature-card">
// <div className="icon">🎤</div>
// <h3>Voice Scam Detection</h3>
// <p>Detect scam patterns in voice calls</p>
// </Link>


// <Link to="/history" className="feature-card">
// <div className="icon">📊</div>
// <h3>Scam History Dashboard</h3>
// <p>View previous scam detections and analytics</p>
// </Link>


// <div className="feature-card">
// <div className="icon">📈</div>
// <h3>Scam Probability Meter</h3>
// <p>Real-time risk scoring using AI analysis</p>
// </div>


// <div className="feature-card">
// <div className="icon">⚠</div>
// <h3>Scam Type Detection</h3>
// <p>Identify phishing, lottery, banking scams</p>
// </div>

// </div>

// </div>

// )

// }

// export default Dashboard





















// import { Link } from "react-router-dom"

// function Dashboard(){

// return(

// <div className="dashboard-page">

// <h1 className="dashboard-title">
// 🛡 AI Scam Detection Platform
// </h1>

// <p className="dashboard-subtitle">
// Advanced AI cybersecurity tools to detect scams and phishing attacks
// </p>


// <h2 className="features-title">Features :</h2>


// <div className="features-container">

// <Link to="/scam-detector" className="feature-box">
// <h3>1. AI Scam Detector</h3>

// <ul>
// <li>Detect scam messages instantly</li>
// <li>AI analyzes suspicious patterns</li>
// <li>Provides risk score and prediction</li>
// </ul>

// </Link>



// <Link to="/ai-assistant" className="feature-box">
// <h3>2. AI Chatbot</h3>

// <ul>
// <li>Ask cybersecurity related questions</li>
// <li>Get instant AI advice</li>
// <li>Learn how scams work</li>
// </ul>

// </Link>



// <div className="feature-box">
// <h3>3. Scam Probability Meter</h3>

// <ul>
// <li>Shows real-time scam probability</li>
// <li>Visual risk score indicator</li>
// <li>Helps understand message threat level</li>
// </ul>

// </div>



// <div className="feature-box">
// <h3>4. Scam Type Detection</h3>

// <ul>
// <li>Identify phishing scams</li>
// <li>Detect banking fraud messages</li>
// <li>Lottery and prize scam detection</li>
// </ul>

// </div>



// <Link to="/history" className="feature-box">
// <h3>5. Scam History Dashboard</h3>

// <ul>
// <li>Track previous detections</li>
// <li>View scam analytics</li>
// <li>Monitor scam trends</li>
// </ul>

// </Link>



// <Link to="/url-scanner" className="feature-box">
// <h3>6. URL Scanner</h3>

// <ul>
// <li>Scan suspicious links</li>
// <li>Detect phishing websites</li>
// <li>Analyze domain risk score</li>
// </ul>

// </Link>



// <Link to="/voice-detection" className="feature-box">
// <h3>7. Voice Scam Detection</h3>

// <ul>
// <li>Analyze voice recordings</li>
// <li>Detect scam speech patterns</li>
// <li>AI fraud voice recognition</li>
// </ul>

// </Link>



// </div>

// </div>

// )

// }

// export default Dashboard





















// import { Link } from "react-router-dom"

// function Dashboard(){

// return(

// <div className="dashboard-page">

// <h1 className="dashboard-title">
// 🛡 AI Scam Detection Platform
// </h1>

// <p className="dashboard-subtitle">
// Advanced AI cybersecurity tools to detect scams and phishing attacks
// </p>

// <h2 className="features-title">Features :</h2>


// <div className="features-grid">

// <Link to="/scam-detector" className="feature-card">

// <h3>1. AI Scam Detector</h3>

// <ul>
// <li>Detect scam messages instantly</li>
// <li>AI analyzes suspicious patterns</li>
// <li>Provides risk score and prediction</li>
// </ul>

// </Link>



// <Link to="/ai-assistant" className="feature-card">

// <h3>2. AI Chatbot</h3>

// <ul>
// <li>Ask cybersecurity related questions</li>
// <li>Get instant AI advice</li>
// <li>Learn how scams work</li>
// </ul>

// </Link>



// <div className="feature-card">

// <h3>3. Scam Probability Meter</h3>

// <ul>
// <li>Shows real-time scam probability</li>
// <li>Visual risk score indicator</li>
// <li>Helps understand threat level</li>
// </ul>

// </div>



// <div className="feature-card">

// <h3>4. Scam Type Detection</h3>

// <ul>
// <li>Identify phishing scams</li>
// <li>Detect banking fraud messages</li>
// <li>Lottery and prize scams</li>
// </ul>

// </div>



// <Link to="/history" className="feature-card">

// <h3>5. Scam History Dashboard</h3>

// <ul>
// <li>Track previous scam detections</li>
// <li>View analytics and logs</li>
// <li>Monitor scam trends</li>
// </ul>

// </Link>



// <Link to="/url-scanner" className="feature-card">

// <h3>6. URL Scanner</h3>

// <ul>
// <li>Scan suspicious URLs</li>
// <li>Detect phishing websites</li>
// <li>Analyze domain risk score</li>
// </ul>

// </Link>



// <Link to="/voice-detection" className="feature-card">

// <h3>7. Voice Scam Detection</h3>

// <ul>
// <li>Analyze voice recordings</li>
// <li>Detect scam speech patterns</li>
// <li>AI fraud voice recognition</li>
// </ul>

// </Link>


// </div>

// </div>

// )

// }

// export default Dashboard












// import { Link } from "react-router-dom"

// function Dashboard(){

// return(

// <div className="dashboard-page">

// <h1 className="dashboard-title">
// 🛡 AI Scam Detection Platform
// </h1>

// <p className="dashboard-subtitle">
// Advanced AI cybersecurity tools to detect scams and phishing attacks
// </p>

// <h2 className="features-title">Features :</h2>


// <div className="features-grid">

// <Link to="/scam-detector" className="feature-card">
// <h3>1. AI Scam Detector</h3>
// <ul>
// <li>Detect scam messages instantly</li>
// <li>AI analyzes suspicious patterns</li>
// <li>Provides risk score and prediction</li>
// </ul>
// </Link>

// <Link to="/ai-assistant" className="feature-card">
// <h3>2. AI Chatbot</h3>
// <ul>
// <li>Ask cybersecurity questions</li>
// <li>Get instant AI advice</li>
// <li>Learn how scams work</li>
// </ul>
// </Link>

// <div className="feature-card">
// <h3>3. Scam Probability Meter</h3>
// <ul>
// <li>Real-time scam probability</li>
// <li>Visual risk score indicator</li>
// <li>Understand threat level</li>
// </ul>
// </div>

// <div className="feature-card">
// <h3>4. Scam Type Detection</h3>
// <ul>
// <li>Identify phishing scams</li>
// <li>Detect banking fraud</li>
// <li>Lottery and prize scams</li>
// </ul>
// </div>

// <Link to="/history" className="feature-card">
// <h3>5. Scam History Dashboard</h3>
// <ul>
// <li>Track previous detections</li>
// <li>View analytics</li>
// <li>Monitor trends</li>
// </ul>
// </Link>

// <Link to="/url-scanner" className="feature-card">
// <h3>6. URL Scanner</h3>
// <ul>
// <li>Scan suspicious links</li>
// <li>Detect phishing websites</li>
// <li>Analyze domain risk</li>
// </ul>
// </Link>

// <Link to="/voice-detection" className="feature-card">
// <h3>7. Voice Scam Detection</h3>
// <ul>
// <li>Analyze voice recordings</li>
// <li>Detect scam speech patterns</li>
// <li>AI fraud recognition</li>
// </ul>
// </Link>

// </div>

// </div>

// )

// }

// export default Dashboard













// import { Link } from "react-router-dom"

// function Dashboard(){

// return(

// <div className="dashboard-page">

// <h1 className="dashboard-title">
// 🛡 AI Scam Detection Platform
// </h1>

// <p className="dashboard-subtitle">
// Advanced AI cybersecurity tools to detect scams and phishing attacks
// </p>

// <h2 className="features-title">Features :</h2>


// <div className="features-grid">

// <Link to="/scam-detector" className="feature-card">
// <h3>1. AI Scam Detector</h3>
// <ul>
// <li>Detect scam messages instantly</li>
// <li>AI analyzes suspicious patterns</li>
// <li>Provides risk score and prediction</li>
// </ul>
// </Link>


// <Link to="/ai-assistant" className="feature-card">
// <h3>2. AI Chatbot</h3>
// <ul>
// <li>Ask cybersecurity related questions</li>
// <li>Get instant AI advice</li>
// <li>Learn how scams work</li>
// </ul>
// </Link>


// <div className="feature-card">
// <h3>3. Scam Probability Meter</h3>
// <ul>
// <li>Shows real-time scam probability</li>
// <li>Visual risk score indicator</li>
// <li>Understand threat level</li>
// </ul>
// </div>


// <div className="feature-card">
// <h3>4. Scam Type Detection</h3>
// <ul>
// <li>Identify phishing scams</li>
// <li>Detect banking fraud messages</li>
// <li>Lottery and prize scam detection</li>
// </ul>
// </div>


// <Link to="/history" className="feature-card">
// <h3>5. Scam History Dashboard</h3>
// <ul>
// <li>Track previous detections</li>
// <li>View analytics and logs</li>
// <li>Monitor scam trends</li>
// </ul>
// </Link>


// <Link to="/url-scanner" className="feature-card">
// <h3>6. URL Scanner</h3>
// <ul>
// <li>Scan suspicious URLs</li>
// <li>Detect phishing websites</li>
// <li>Analyze domain risk score</li>
// </ul>
// </Link>


// <Link to="/voice-detection" className="feature-card">
// <h3>7. Voice Scam Detection</h3>
// <ul>
// <li>Analyze voice recordings</li>
// <li>Detect scam speech patterns</li>
// <li>AI fraud voice recognition</li>
// </ul>
// </Link>

// </div>

// </div>

// )

// }

// export default Dashboard
















// import { Link } from "react-router-dom"

// function Dashboard(){

// return(

// <div className="dashboard-page">

// <h1 className="dashboard-title">🛡 AI Scam Detection Platform</h1>

// <p className="dashboard-subtitle">
// Advanced AI cybersecurity tools to detect scams and phishing attacks
// </p>


// {/* STATS SECTION */}

// <div className="stats-grid">

// <div className="stat-card">
// <h2>128</h2>
// <p>Total Scans</p>
// </div>

// <div className="stat-card">
// <h2>36</h2>
// <p>Scams Detected</p>
// </div>

// <div className="stat-card">
// <h2>92</h2>
// <p>Safe Messages</p>
// </div>

// </div>


// <h2 className="features-title">Features</h2>


// <div className="features-grid">

// <Link to="/scam-detector" className="feature-card">
// <h3>🤖 AI Scam Detector</h3>
// <p>Detect scam messages instantly using AI.</p>
// </Link>

// <Link to="/ai-assistant" className="feature-card">
// <h3>💬 AI Chatbot</h3>
// <p>Ask cybersecurity questions and get AI help.</p>
// </Link>

// <Link to="/url-scanner" className="feature-card">
// <h3>🔗 URL Scanner</h3>
// <p>Analyze suspicious links and detect phishing.</p>
// </Link>

// <Link to="/voice-detection" className="feature-card">
// <h3>🎤 Voice Scam Detection</h3>
// <p>Detect scam patterns in voice calls.</p>
// </Link>

// <Link to="/history" className="feature-card">
// <h3>📊 Scam History Dashboard</h3>
// <p>View previous scam detections and analytics.</p>
// </Link>

// <div className="feature-card">
// <h3>📈 Scam Probability Meter</h3>
// <p>Real-time scam probability scoring.</p>
// </div>

// <div className="feature-card">
// <h3>⚠ Scam Type Detection</h3>
// <p>Identify phishing, banking, and lottery scams.</p>
// </div>

// </div>

// </div>

// )

// }

// export default Dashboard












// import { Link } from "react-router-dom"

// function Dashboard(){

// return(

// <div className="dashboard">

// <h1 className="dashboard-title">
// 🛡 AI Scam Detection Platform
// </h1>

// <p className="dashboard-subtitle">
// Advanced AI cybersecurity tools to detect scams and phishing attacks
// </p>


{/* STATS */}

{/* <div className="stats">

<div className="stat">
<h2>128</h2>
<p>Total Scans</p>
</div>

<div className="stat">
<h2>36</h2>
<p>Scams Detected</p>
</div>

<div className="stat">
<h2>92</h2>
<p>Safe Messages</p>
</div>

</div> */}


{/* <h2 className="features-title">Features</h2>


<div className="features">


<Link to="/scam-detector" className="card">
<h3>🤖 AI Scam Detector</h3>
<ul>
<li>Detect scam messages instantly</li>
<li>AI analyzes suspicious patterns</li>
<li>Provides risk score and prediction</li>
</ul>
</Link>


<Link to="/ai-assistant" className="card">
<h3>💬 AI Chatbot</h3>
<ul>
<li>Ask cybersecurity questions</li>
<li>Get instant AI advice</li>
<li>Learn how scams work</li>
</ul>
</Link>


<div className="card">
<h3>📈 Scam Probability Meter</h3>
<ul>
<li>Real-time scam probability</li>
<li>Visual risk scoring</li>
<li>Threat level indicator</li>
</ul>
</div>


<div className="card">
<h3>⚠ Scam Type Detection</h3>
<ul>
<li>Detect phishing scams</li>
<li>Identify banking fraud</li>
<li>Lottery scam detection</li>
</ul>
</div>


<Link to="/history" className="card">
<h3>📊 Scam History Dashboard</h3>
<ul>
<li>Track previous detections</li>
<li>View analytics</li>
<li>Monitor scam trends</li>
</ul>
</Link>


<Link to="/url-scanner" className="card">
<h3>🔗 URL Scanner</h3>
<ul>
<li>Scan suspicious URLs</li>
<li>Detect phishing websites</li>
<li>Analyze domain security</li>
</ul>
</Link>


<Link to="/voice-detection" className="card">
<h3>🎤 Voice Scam Detection</h3>
<ul>
<li>Analyze voice recordings</li>
<li>Detect scam patterns</li>
<li>AI fraud recognition</li>
</ul>
</Link>


</div>

</div>

)

}

export default Dashboard */}














// import { Link } from "react-router-dom"

// function Dashboard(){

// return(

// <div className="dashboard-page">

// <h1 className="dashboard-title">
// 🛡 AI Scam Detection Platform
// </h1>

// <p className="dashboard-subtitle">
// Advanced AI cybersecurity tools to detect scams and phishing attacks
// </p>

// <h2 className="features-title">Features</h2>


// <div className="features-grid">


// <Link to="/scam-detector" className="feature-card">
// <h3>🤖 AI Scam Detector</h3>
// <ul>
// <li>Detect scam messages instantly</li>
// <li>AI analyzes suspicious patterns</li>
// <li>Provides risk score and prediction</li>
// </ul>
// </Link>


// <Link to="/ai-assistant" className="feature-card">
// <h3>💬 AI Chatbot</h3>
// <ul>
// <li>Ask cybersecurity questions</li>
// <li>Get instant AI advice</li>
// <li>Learn how scams work</li>
// </ul>
// </Link>


// <div className="feature-card">
// <h3>📊 Scam Probability Meter</h3>
// <ul>
// <li>Real-time scam probability</li>
// <li>Visual risk scoring</li>
// <li>Threat level indicator</li>
// </ul>
// </div>


// <div className="feature-card">
// <h3>⚠ Scam Type Detection</h3>
// <ul>
// <li>Detect phishing scams</li>
// <li>Identify banking fraud</li>
// <li>Lottery scam detection</li>
// </ul>
// </div>


// <Link to="/history" className="feature-card">
// <h3>📈 Scam History Dashboard</h3>
// <ul>
// <li>Track previous detections</li>
// <li>View analytics</li>
// <li>Monitor scam trends</li>
// </ul>
// </Link>


// <Link to="/url-scanner" className="feature-card">
// <h3>🔗 URL Scanner</h3>
// <ul>
// <li>Scan suspicious URLs</li>
// <li>Detect phishing websites</li>
// <li>Analyze domain security</li>
// </ul>
// </Link>


// <Link to="/voice-detection" className="feature-card">
// <h3>🎤 Voice Scam Detection</h3>
// <ul>
// <li>Analyze voice recordings</li>
// <li>Detect scam patterns</li>
// <li>AI fraud recognition</li>
// </ul>
// </Link>


// </div>

// </div>

// )

// }

// export default Dashboard
















// function Dashboard(){

// return(

// <div className="dashboard-page">

// <h1 className="dashboard-title">
// 🛡 AI Scam Detection Platform
// </h1>

// <p className="dashboard-subtitle">
// Advanced AI cybersecurity tools to detect scams and phishing attacks
// </p>

// <h2 className="features-title">Features</h2>


// <div className="features-column">

// <div className="feature-box">
// <h3>📊 Scam Probability Meter</h3>
// <ul>
// <li>Real-time scam probability</li>
// <li>Visual risk scoring</li>
// <li>Threat level indicator</li>
// </ul>
// </div>


// <div className="feature-box">
// <h3>⚠ Scam Type Detection</h3>
// <ul>
// <li>Detect phishing scams</li>
// <li>Identify banking fraud</li>
// <li>Lottery scam detection</li>
// </ul>
// </div>


// <div className="feature-box">
// <h3>🤖 AI Scam Detector</h3>
// <ul>
// <li>Detect scam messages instantly</li>
// <li>AI analyzes suspicious patterns</li>
// <li>Provides risk score and prediction</li>
// </ul>
// </div>


// <div className="feature-box">
// <h3>💬 AI Chatbot</h3>
// <ul>
// <li>Ask cybersecurity questions</li>
// <li>Get instant AI advice</li>
// <li>Learn how scams work</li>
// </ul>
// </div>


// <div className="feature-box">
// <h3>📈 Scam History Dashboard</h3>
// <ul>
// <li>Track previous detections</li>
// <li>View analytics</li>
// <li>Monitor scam trends</li>
// </ul>
// </div>


// <div className="feature-box">
// <h3>🔗 URL Scanner</h3>
// <ul>
// <li>Scan suspicious URLs</li>
// <li>Detect phishing websites</li>
// <li>Analyze domain security</li>
// </ul>
// </div>


// <div className="feature-box">
// <h3>🎤 Voice Scam Detection</h3>
// <ul>
// <li>Analyze voice recordings</li>
// <li>Detect scam patterns</li>
// <li>AI fraud recognition</li>
// </ul>
// </div>


// </div>

// </div>

// )

// }

// export default Dashboard















// import "./scam.css"

// function Dashboard(){


// const features = [
// {
// title:"AI Scam Detector",
// desc:"Detect scam messages instantly using AI analysis."
// },
// {
// title:"AI Chatbot",
// desc:"Ask cybersecurity questions and get AI advice."
// },
// {
// title:"Scam Probability Meter",
// desc:"Visual AI risk scoring system for scam detection."
// },
// {
// title:"Scam Type Detection",
// desc:"Identify phishing, banking fraud and lottery scams."
// },
// {
// title:"Scam History Dashboard",
// desc:"Track previous scam detections and analytics."
// },
// {
// title:"URL Scanner",
// desc:"Scan suspicious URLs and detect phishing websites."
// },
// {
// title:"Voice Scam Detection",
// desc:"Analyze voice recordings to detect scam patterns."
// },
// {
// title:"Financial Scam Indicators",
// desc:"Fraudsters often send messages about KYC updates, Aadhaar/PAN verification, or UPI/Paytm/Google Pay payments to trick users into sharing sensitive information or transferring money."
// }
// ]

// return(

// <div className="dashboard">

// <h1 className="dashboard-title">
//  <center> 🛡  AI Scam Detection Platform</center>
// </h1>
// {/* 
// <h1 className="dashboard-title">
// 🛡 AI Scam Detection Platform
// </h1> */}

// <p className="dashboard-subtitle">
//  AI cybersecurity tools to detect scams and phishing attacks.
// </p>



// <p><center>Why Choose AI Scam Detection?</center></p>
// <hr></hr>



// <div className="card-grid">

// {features.map((item,index)=>(
// <div key={index} className="feature-card">

// <h3>{item.title}</h3>

// <p>{item.desc}</p>

//  {/* <button className="feature-btn">
// Open
// </button>  */}

// </div>
// ))}

// </div>

// </div>
// )
// }

// export default Dashboard








// import { Link } from "react-router-dom"
// import "./scam.css"

// function Dashboard(){

// const features = [
// {
// title:"AI Scam Detector",
// desc:"Detect scam messages instantly using AI analysis."
// },
// {
// title:"AI Chatbot",
// desc:"Ask cybersecurity questions and get AI advice."
// },
// {
// title:"Scam Probability Meter",
// desc:"Visual AI risk scoring system for scam detection."
// },
// {
// title:"Scam Type Detection",
// desc:"Identify phishing, banking fraud and lottery scams."
// },
// {
// title:"Scam History Dashboard",
// desc:"Track previous scam detections and analytics."
// },
// {
// title:"URL Scanner",
// desc:"Scan suspicious URLs and detect phishing websites."
// },
// {
// title:"Voice Scam Detection",
// desc:"Analyze voice recordings to detect scam patterns."
// },
// {
// title:"Financial Scam Indicators",
// desc:"Fraudsters often send messages about KYC updates, Aadhaar/PAN verification, or UPI/Paytm/Google Pay payments to trick users into sharing sensitive information or transferring money."
// }
// ]

// return(

// <div className="dashboard">

// <h1 className="dashboard-title">
// <center>🛡 AI Scam Detection Platform</center>
// </h1>

// <p className="dashboard-subtitle">
// <center>AI cybersecurity tools to detect scams and phishing attacks.</center>
// </p>


// {/* HERO BUTTONS */}

// <div style={{textAlign:"center", marginTop:"25px"}}>

// <Link to="/detector">
// <button className="hero-btn">
// Try Detector
// </button>
// </Link>

// <Link to="/assistant">
// <button className="hero-btn-outline">
// Ask AI Assistant
// </button>
// </Link>

// </div>


// <p style={{marginTop:"40px"}}>
// <center>Why Choose AI Scam Detection?</center>
// </p>

// <hr />


// <div className="card-grid">

// {features.map((item,index)=>(
// <div key={index} className="feature-card">

// <h3>{item.title}</h3>

// <p>{item.desc}</p>

// </div>
// ))}

// </div>

// </div>

// )

// }

// export default Dashboard






// import { Link } from "react-router-dom"

// import "./scam.css"

// function Dashboard(){

// const features = [
// {
// title:"AI Scam Detector",
// desc:"Detect scam messages instantly using AI analysis."
// },
// {
// title:"AI Chatbot",
// desc:"Ask cybersecurity questions and get AI advice."
// },
// {
// title:"Scam Probability Meter",
// desc:"Visual AI risk scoring system for scam detection."
// },
// {
// title:"Scam Type Detection",
// desc:"Identify phishing, banking fraud and lottery scams."
// },
// {
// title:"Scam History Dashboard",
// desc:"Track previous scam detections and analytics."
// },
// {
// title:"URL Scanner",
// desc:"Scan suspicious URLs and detect phishing websites."
// },
// {
// title:"Voice Scam Detection",
// desc:"Analyze voice recordings to detect scam patterns."
// },
// {
// title:"Financial Scam Indicators",
// desc:"Fraudsters often send messages about KYC updates, Aadhaar/PAN verification, or UPI/Paytm/Google Pay payments to trick users into sharing sensitive information or transferring money."
// }
// ]

// return(

// <div className="dashboard">

// <h1 className="dashboard-title">
// 🛡 AI Scam Detection Platform
// </h1>

// <p className="dashboard-subtitle">
// AI cybersecurity tools to detect scams and phishing attacks.
// </p>


// <h2 className="dashboard-section-title">
// Why Choose AI Scam Detection?
// </h2>

// <hr/>


// <div className="card-grid">

// {features.map((item,index)=>(

// <div key={index} className="feature-card">

// <h3>{item.title}</h3>

// <p>{item.desc}</p>

// </div>

// ))}

// </div>

// </div>

// )

// }

// export default Dashboard

















import { Link } from "react-router-dom"
import "./scam.css"

function Dashboard(){

const features = [
{
title:"AI Scam Detector",
desc:"Detect scam messages instantly using AI analysis."
},
{
title:"AI Chatbot",
desc:"Ask cybersecurity questions and get AI advice."
},
{
title:"Scam Probability Meter",
desc:"Visual AI risk scoring system for scam detection."
},
{
title:"Scam Type Detection",
desc:"Identify phishing, banking fraud and lottery scams."
},
{
title:"Scam History Dashboard",
desc:"Track previous scam detections and analytics."
},
{
title:"URL Scanner",
desc:"Scan suspicious URLs and detect phishing websites."
},
{
title:"Voice Scam Detection",
desc:"Analyze voice recordings to detect scam patterns."
},
{
title:"Financial Scam Indicators",
desc:"Fraudsters often send messages about KYC updates, Aadhaar/PAN verification, or UPI/Paytm/Google Pay payments to trick users into sharing sensitive information or transferring money."
}
]

return(

<div className="dashboard">

<h1 className="dashboard-title">
🛡 AI Scam Detection Platform
</h1>

<p className="dashboard-subtitle">
AI cybersecurity tools to detect scams and phishing attacks.
</p>

<h2 className="dashboard-section-title">
Why Choose AI Scam Detection?
<hr></hr>
</h2>

<hr className="dashboard-divider"/>

<div className="card-grid">

{features.map((item,index)=>(

<div key={index} className="feature-card">

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>

))}

</div>

</div>

)

}

export default Dashboard

