// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

















// import { useState } from "react"
// import axios from "axios"

// function App(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const checkScam = async ()=>{

// const res = await axios.post("http://localhost:5000/api/check",{
// message
// })

// setResult(res.data)

// }

// return(

// <div style={{textAlign:"center",padding:"40px"}}>

// <h1>🔐 AI Scam Detection System</h1>
// <p>Detect phishing and scam messages instantly</p>

// <textarea
// placeholder="Paste suspicious message here..."
// rows="6"
// cols="60"
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <br/><br/>

// <button onClick={checkScam}>
// Detect Scam
// </button>

// <br/><br/>

// {result && (

// <div style={{
// border:"1px solid gray",
// padding:"20px",
// width:"300px",
// margin:"auto"
// }}>

// <h2>{result.result}</h2>

// <h3>Risk Score : {result.risk_score}%</h3>

// </div>

// )}

// </div>

// )

// }

// export default App













// import {useState} from "react"
// import axios from "axios"
// import {Bar} from "react-chartjs-2"
// import "chart.js/auto"

// function App(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// const res = await axios.post("http://localhost:5000/api/check",{
// message
// })

// setResult(res.data)
// }

// const data = {
// labels:["Scam","Safe"],
// datasets:[
// {
// label:"Messages",
// data:[12,8]
// }
// ]
// }

// return(

// <div className="container">

// <h1>🔐 AI Scam Detection System</h1>
// <p>Cyber Security AI Protection</p>

// <textarea
// rows="5"
// placeholder="Paste suspicious message..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <br/><br/>

// <button onClick={detectScam}>
// Detect Scam
// </button>

// {result && (

// <div className="result">

// <h2>{result.result}</h2>

// <h3>Risk Score : {result.risk_score}%</h3>

// {result.risk_score > 70 &&
// <p>⚠ Phishing Link Detected</p>}

// <div style={{marginTop:"20px"}}>

// <div style={{
// background:"#334155",
// height:"20px",
// borderRadius:"10px"
// }}>

// <div style={{
// width:`${result.risk_score}%`,
// background:"red",
// height:"20px",
// borderRadius:"10px"
// }}></div>

// </div>

// </div>

// </div>

// )}

// <h2 style={{marginTop:"40px"}}>Dashboard Analytics</h2>

// <Bar data={data}/>
// </div>

// )

// }

// export default App










// import { useState } from "react"
// import axios from "axios"
// import { Bar } from "react-chartjs-2"
// import "chart.js/auto"

// function App(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// const res = await axios.post("http://localhost:5000/api/check",{
// message
// })

// setResult(res.data)
// }

// const data = {
// labels:["Scam","Safe"],
// datasets:[
// {
// label:"Messages",
// data:[12,8],
// backgroundColor:["red","green"]
// }
// ]
// }

// return(

// <div className="container">

// <h1>🔐 AI Scam Detection System</h1>
// <p>Cyber Security AI Protection</p>

// <textarea
// rows="5"
// placeholder="Paste suspicious message..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <br/><br/>

// <button onClick={detectScam}>
// Detect Scam
// </button>

// {result && (

// <div className="result">

// <h2>{result.result}</h2>

// <h3>Risk Score : {result.risk_score}%</h3>

// {/* phishing link detection */}
// {/* {result.phishing_link && (
// <p style={{color:"red"}}>⚠ Phishing Link Detected</p>
// )} */}


// {result && (

// <div className="result">

// <h2>{result.result}</h2>

// <h3>Risk Score : {result.risk_score}%</h3>

// <h3>AI Confidence : {result.ai_confidence}</h3>

// {result.phishing_link && (
// <p style={{color:"red"}}>⚠ Phishing Link Detected</p>
// )}

// </div>

// )}

// {/* risk progress bar */}

// <div style={{marginTop:"20px"}}>

// <div style={{
// background:"#334155",
// height:"20px",
// borderRadius:"10px"
// }}>

// <div style={{
// width:`${result.risk_score}%`,
// background:"red",
// height:"20px",
// borderRadius:"10px"
// }}></div>

// </div>

// </div>

// </div>

// )}

// <h2 style={{marginTop:"40px"}}>Dashboard Analytics</h2>

// <Bar data={data}/>

// </div>

// )

// }

// export default App













// import { useState } from "react"
// import axios from "axios"
// import { Bar } from "react-chartjs-2"
// import "chart.js/auto"

// function App(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// try{

// const res = await axios.post("http://localhost:5000/api/check",{
// message
// })

// setResult(res.data)

// if(res.data.risk_score > 70){
// alert("⚠ Scam Message Detected!")
// }

// }catch(error){
// console.log(error)
// }

// }

// const data = {
// labels:["Scam","Safe"],
// datasets:[
// {
// label:"Detection Analytics",
// data:[12,8],
// backgroundColor:["red","green"]
// }
// ]
// }

// return(

// <div className="container">

// <h1>🔐 AI Scam Detection System</h1>
// <p>AI Powered Cybersecurity Protection</p>

// <textarea
// rows="5"
// placeholder="Paste suspicious message here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <br/><br/>

// <button onClick={detectScam}>
// Detect Scam
// </button>

// {/* RESULT SECTION */}

// {result && (

// <div className="result">

// <h2>{result.result}</h2>

// <h3>Risk Score : {result.risk_score}%</h3>

// <h3>AI Confidence : {result.ai_confidence}</h3>

// {/* PHISHING LINK DETECTION */}

// {result.phishing_link && (
// <p style={{color:"red"}}>⚠ Phishing Link Detected</p>
// )}

// {/* RISK METER */}

// <div style={{marginTop:"20px"}}>

// <div style={{
// background:"#334155",
// height:"20px",
// borderRadius:"10px"
// }}>

// <div style={{
// width:`${result.risk_score}%`,
// background:"red",
// height:"20px",
// borderRadius:"10px"
// }}></div>

// </div>

// </div>

// </div>

// )}

// <h2 style={{marginTop:"40px"}}>Dashboard Analytics</h2>

// <Bar data={data}/>

// </div>

// )

// }

// export default App















// import { useState } from "react"
// import axios from "axios"
// import { Bar } from "react-chartjs-2"
// import "chart.js/auto"
// import GaugeChart from "react-gauge-chart"

// function App(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const [total,setTotal] = useState(0)
// const [scam,setScam] = useState(0)
// const [safe,setSafe] = useState(0)

// const detectScam = async()=>{

// try{

// const res = await axios.post("http://localhost:5000/api/check",{
// message
// })

// setResult(res.data)

// setTotal(prev => prev + 1)

// if(res.data.risk_score > 50){
// setScam(prev => prev + 1)
// alert("⚠ Scam Message Detected!")
// }else{
// setSafe(prev => prev + 1)
// }

// }catch(error){
// console.log(error)
// }

// }

// const data = {
// labels:["Scam","Safe"],
// datasets:[
// {
// label:"Detection Analytics",
// data:[scam,safe],
// backgroundColor:["#ff3b3b","#00ff9c"]
// }
// ]
// }

// return(

// <div className="container">

// <h1 className="title">🔐 AI Scam Detection System</h1>
// <p className="subtitle">AI Powered Cybersecurity Protection</p>

// {/* MESSAGE SCANNER */}

// <div className="scanner">

// <textarea
// rows="5"
// placeholder="Paste suspicious message here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <br/><br/>

// <button onClick={detectScam}>
// Detect Scam
// </button>

// </div>


// {/* RESULT PANEL */}

// {result && (

// <div className="result-card">

// <h2>{result.result}</h2>

// <h3>Risk Score : {result.risk_score}%</h3>

// <h3>AI Confidence : {result.ai_confidence}</h3>

// {/* PHISHING DETECTION */}

// {result.phishing_link && (
// <p className="phishing">⚠ Phishing Link Detected</p>
// )}

// {/* RISK GAUGE */}

// <GaugeChart
// id="risk-gauge"
// nrOfLevels={20}
// percent={result.risk_score/100}
// colors={["#00ff9c","#ff0000"]}
// />

// </div>

// )}


// {/* LIVE DETECTION COUNTERS */}

// <div className="counter-panel">

// <div className="counter">
// <h2>{total}</h2>
// <p>Total Scans</p>
// </div>

// <div className="counter">
// <h2>{scam}</h2>
// <p>Scam Detected</p>
// </div>

// <div className="counter">
// <h2>{safe}</h2>
// <p>Safe Messages</p>
// </div>

// </div>


// {/* ANALYTICS PANEL */}

// <div className="chart-panel">

// <h2>Scam vs Safe Analytics</h2>

// <Bar data={data}/>

// </div>

// </div>

// )

// }

// export default App










// import { useState } from "react"
// import axios from "axios"
// import { Bar } from "react-chartjs-2"
// import "chart.js/auto"

// import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"

// function App(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const [total,setTotal] = useState(0)
// const [scam,setScam] = useState(0)
// const [safe,setSafe] = useState(0)

// const detectScam = async()=>{

// const res = await axios.post("http://localhost:5000/api/check",{message})

// setResult(res.data)

// setTotal(prev=>prev+1)

// if(res.data.risk_score > 50){
// setScam(prev=>prev+1)
// alert("⚠ Scam Detected")
// }else{
// setSafe(prev=>prev+1)
// }

// }

// const data = {
// labels:["Scam","Safe"],
// datasets:[
// {
// label:"Detection Analytics",
// data:[scam,safe],
// backgroundColor:["#ff3b3b","#00ff9c"]
// }
// ]
// }

// return(

// <div className="container">

// <h1 className="title">🔐 AI Scam Detection System</h1>
// <p className="subtitle">AI Powered Cybersecurity Protection</p>

// {/* MESSAGE SCANNER */}

// <div className="scanner">

// <textarea
// rows="5"
// placeholder="Paste suspicious message here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button onClick={detectScam}>Detect Scam</button>

// </div>


// {/* RESULT PANEL */}

// {result && (

// <div className="result-panel">

// <h2>{result.result}</h2>

// <p>Risk Score: {result.risk_score}%</p>
// <p>AI Confidence: {result.ai_confidence}</p>

// {result.phishing_link && (
// <p className="phishing">⚠ Phishing Link Detected</p>
// )}

// <div className="gauge">

// <CircularProgressbar
// value={result.risk_score}
// text={`${result.risk_score}%`}
// styles={buildStyles({
// textColor:"#fff",
// pathColor:"#ff3b3b",
// trailColor:"#1e293b"
// })}
// />

// </div>

// </div>

// )}

// {/* LIVE COUNTERS */}

// <div className="counter-grid">

// <div className="counter-card">
// <h2>{total}</h2>
// <p>Total Scans</p>
// </div>

// <div className="counter-card">
// <h2>{scam}</h2>
// <p>Scam Detected</p>
// </div>

// <div className="counter-card">
// <h2>{safe}</h2>
// <p>Safe Messages</p>
// </div>

// </div>


// {/* ANALYTICS */}

// <div className="analytics">

// <h2>Scam vs Safe Analytics</h2>

// <Bar data={data}/>

// </div>

// </div>

// )

// }

// export default App









// import { useState } from "react"
// import axios from "axios"
// import { Bar } from "react-chartjs-2"
// import "chart.js/auto"

// import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"

// function App(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const [total,setTotal] = useState(0)
// const [scam,setScam] = useState(0)
// const [safe,setSafe] = useState(0)

// const detectScam = async()=>{

// if(message.trim()===""){
// alert("Please enter a message")
// return
// }

// try{

// const res = await axios.post("http://localhost:5000/api/check",{message})

// setResult(res.data)

// setTotal(prev=>prev+1)

// if(res.data.risk_score > 50){
// setScam(prev=>prev+1)
// alert("⚠ Scam Detected")
// }else{
// setSafe(prev=>prev+1)
// }

// }catch(err){
// console.log(err)
// alert("Server Error")
// }

// }

// const data = {
// labels:["Scam","Safe"],
// datasets:[
// {
// label:"Detection Analytics",
// data:[scam,safe],
// backgroundColor:["#ff3b3b","#00ff9c"]
// }
// ]
// }

// return(

// <div className="container">

// <h1 className="title">🔐 AI Scam Detection System</h1>
// <p className="subtitle">AI Powered Cybersecurity Protection</p>

// {/* MESSAGE SCANNER */}

// <div className="scanner">

// <textarea
// rows="5"
// placeholder="Paste suspicious message here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button onClick={detectScam}>
// Detect Scam
// </button>

// </div>


// {/* RESULT PANEL */}

// {result && (

// <div className="result-panel">

// <h2>{result.result}</h2>

// <p>Risk Score: {result.risk_score}%</p>
// <p>AI Confidence: {result.ai_confidence}</p>

// {result.phishing_link && (
// <p className="phishing">⚠ Phishing Link Detected</p>
// )}

// <div className="gauge">

// <CircularProgressbar
// value={result.risk_score}
// text={`${result.risk_score}%`}
// styles={buildStyles({
// textColor:"#fff",
// pathColor:"#ff3b3b",
// trailColor:"#1e293b"
// })}
// />

// </div>

// </div>

// )}


// {/* LIVE COUNTERS */}

// <div className="counter-grid">

// <div className="counter-card">
// <h2>{total}</h2>
// <p>Total Scans</p>
// </div>

// <div className="counter-card">
// <h2>{scam}</h2>
// <p>Scam Detected</p>
// </div>

// <div className="counter-card">
// <h2>{safe}</h2>
// <p>Safe Messages</p>
// </div>

// </div>


// {/* ANALYTICS */}

// <div className="analytics">

// <h2>Scam vs Safe Analytics</h2>

// <Bar data={data}/>

// </div>

// </div>

// )

// }

// export default App








// import { useState } from "react"
// import axios from "axios"
// import { Bar } from "react-chartjs-2"
// import "chart.js/auto"

// import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"

// function App(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const [total,setTotal] = useState(0)
// const [scam,setScam] = useState(0)
// const [safe,setSafe] = useState(0)

// // Chatbot states
// const [chat,setChat] = useState("")
// const [reply,setReply] = useState("")

// // ================= SCAM DETECTION =================

// const detectScam = async()=>{

// if(message.trim()===""){
// alert("Please enter a message")
// return
// }

// try{

// const res = await axios.post("http://localhost:5000/api/check",{message})

// setResult(res.data)

// setTotal(prev=>prev+1)

// if(res.data.risk_score > 50){
// setScam(prev=>prev+1)
// alert("⚠ Scam Detected")
// }else{
// setSafe(prev=>prev+1)
// }

// }catch(err){
// console.log(err)
// alert("Server Error")
// }

// }


// // ================= AI CHATBOT =================

// const askAI = async()=>{

// if(chat.trim()===""){
// alert("Ask something first")
// return
// }

// try{

// const res = await axios.post("http://localhost:5000/api/chatbot",{
// message:chat
// })

// setReply(res.data.reply)

// }catch(err){

// console.log(err)
// alert("AI Server Error")

// }

// }


// // ================= ANALYTICS DATA =================

// const data = {
// labels:["Scam","Safe"],
// datasets:[
// {
// label:"Detection Analytics",
// data:[scam,safe],
// backgroundColor:["#ff3b3b","#00ff9c"]
// }
// ]
// }


// // ================= UI =================

// return(

// <div className="container">

// <h1 className="title">🔐 AI Scam Detection System</h1>
// <p className="subtitle">AI Powered Cybersecurity Protection</p>


// {/* MESSAGE SCANNER */}

// <div className="scanner">

// <textarea
// rows="5"
// placeholder="Paste suspicious message here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button onClick={detectScam}>
// Detect Scam
// </button>

// </div>


// {/* RESULT PANEL */}

// {result && (

// <div className="result-panel">

// <h2>{result.result}</h2>

// <p>Risk Score: {result.risk_score}%</p>
// <p>AI Confidence: {result.ai_confidence}</p>

// {result.phishing_link && (
// <p className="phishing">⚠ Phishing Link Detected</p>
// )}

// <div className="gauge">

// <CircularProgressbar
// value={result.risk_score}
// text={`${result.risk_score}%`}
// styles={buildStyles({
// textColor:"#fff",
// pathColor:"#ff3b3b",
// trailColor:"#1e293b"
// })}
// />

// </div>

// </div>

// )}


// {/* LIVE COUNTERS */}

// <div className="counter-grid">

// <div className="counter-card">
// <h2>{total}</h2>
// <p>Total Scans</p>
// </div>

// <div className="counter-card">
// <h2>{scam}</h2>
// <p>Scam Detected</p>
// </div>

// <div className="counter-card">
// <h2>{safe}</h2>
// <p>Safe Messages</p>
// </div>

// </div>


// {/* ANALYTICS */}

// <div className="analytics">

// <h2>Scam vs Safe Analytics</h2>

// <Bar data={data}/>

// </div>


// {/* AI CHATBOT */}

// <div className="chatbot">

// <h2>🤖 AI Scam Assistant</h2>

// <textarea
// rows="4"
// placeholder="Ask AI: Is this message safe?"
// value={chat}
// onChange={(e)=>setChat(e.target.value)}
// />

// <button onClick={askAI}>
// Ask AI
// </button>

// {reply && (

// <div className="ai-reply">

// <p>{reply}</p>

// </div>

// )}

// </div>

// </div>

// )

// }

// export default App









import { useState } from "react"
import axios from "axios"
import { Bar } from "react-chartjs-2"
import "chart.js/auto"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

function App(){

const [message,setMessage] = useState("")
const [result,setResult] = useState(null)

const [total,setTotal] = useState(0)
const [scam,setScam] = useState(0)
const [safe,setSafe] = useState(0)

// Chatbot states
const [chat,setChat] = useState("")
const [reply,setReply] = useState("")


// ================= SCAM DETECTION =================

const detectScam = async()=>{

if(message.trim()===""){
alert("Please enter a message")
return
}

try{

const res = await axios.post("http://localhost:5000/api/check",{message})

setResult(res.data)

setTotal(prev=>prev+1)

if(res.data.risk_score > 50){
setScam(prev=>prev+1)
alert("⚠ Scam Detected")
}else{
setSafe(prev=>prev+1)
}

}catch(err){
console.log(err)
alert("Server Error")
}

}


// ================= AI CHATBOT =================

// const askAI = async()=>{

// if(chat.trim()===""){
// alert("Ask something first")
// return
// }

// try{

// const res = await axios.post(
// "http://localhost:5000/api/ask-ai",
// { message: chat }
// )

// setReply(res.data.reply)

// }catch(err){

// console.log(err)
// alert("AI Server Error")

// }

// }


const askAI = async()=>{

if(chat.trim()===""){
alert("Ask something first")
return
}

try{

const res = await axios.post(
"http://localhost:5000/api/ask-ai",
{ message: chat }
)

setReply(res.data.reply)

}catch(err){

console.log(err)
alert("AI Server Error")

}

}


// ================= ANALYTICS DATA =================

const data = {
labels:["Scam","Safe"],
datasets:[
{
label:"Detection Analytics",
data:[scam,safe],
backgroundColor:["#ff3b3b","#00ff9c"]
}
]
}


// ================= UI =================

return(

<div className="container">

<h1 className="title">🔐 AI Scam Detection System</h1>
<p className="subtitle">AI Powered Cybersecurity Protection</p>


{/* MESSAGE SCANNER */}

<div className="scanner">

<textarea
rows="5"
placeholder="Paste suspicious message here..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button onClick={detectScam}>
Detect Scam
</button>

</div>


{/* RESULT PANEL */}

{result && (

<div className="result-panel">

<h2>{result.result}</h2>

<p>Risk Score: {result.risk_score}%</p>
<p>AI Confidence: {result.ai_confidence}</p>

{result.phishing_link && (
<p className="phishing">⚠ Phishing Link Detected</p>
)}

<div className="gauge">

<CircularProgressbar
value={result.risk_score}
text={`${result.risk_score}%`}
styles={buildStyles({
textColor:"#fff",
pathColor:"#ff3b3b",
trailColor:"#1e293b"
})}
/>

</div>

</div>

)}


{/* LIVE COUNTERS */}

<div className="counter-grid">

<div className="counter-card">
<h2>{total}</h2>
<p>Total Scans</p>
</div>

<div className="counter-card">
<h2>{scam}</h2>
<p>Scam Detected</p>
</div>

<div className="counter-card">
<h2>{safe}</h2>
<p>Safe Messages</p>
</div>

</div>


{/* ANALYTICS */}

<div className="analytics">

<h2>Scam vs Safe Analytics</h2>

<Bar data={data}/>

</div>


{/* AI CHATBOT */}

<div className="chatbot">

<h2>🤖 AI Scam Assistant</h2>

<textarea
rows="4"
placeholder="Ask AI: Is this message safe?"
value={chat}
onChange={(e)=>setChat(e.target.value)}
/>

<button onClick={askAI}>
Ask AI
</button>

{reply && (

<div className="ai-reply">

<p>{reply}</p>

</div>

)}

</div>

</div>

)

}

export default App

