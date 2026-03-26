// import {useState} from "react"
// import axios from "axios"
// import {CircularProgressbar} from "react-circular-progressbar"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detect = async()=>{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// {message}
// )

// setResult(res.data)

// }

// return(

// <div>

// <h2>AI Scam Detector</h2>

// <textarea
// placeholder="Paste suspicious message..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button onClick={detect}>
// Detect Scam
// </button>

// {result && (

// <div style={{width:150}}>

// <CircularProgressbar
// value={result.probability}
// text={`${result.probability}%`}
// />

// <p>Type: {result.type}</p>

// </div>

// )}

// </div>

// )

// }

// export default ScamDetector











// import { useState } from "react"
// import axios from "axios"
// import { CircularProgressbar } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message }
// )

// setResult(res.data)

// // SAVE HISTORY
// const newHistory = {
// message: message,
// prediction: res.data.prediction,
// probability: res.data.probability
// }

// const stored = JSON.parse(localStorage.getItem("scanHistory")) || []

// stored.push(newHistory)

// localStorage.setItem("scanHistory", JSON.stringify(stored))

// }catch(err){

// console.log("Error:",err)

// }

// }

// return(

// <div style={{padding:"30px"}}>

// <h2>AI Scam Detector</h2>

// <textarea
// placeholder="Paste suspicious message..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// style={{
// width:"400px",
// height:"120px",
// display:"block",
// marginBottom:"10px"
// }}
// />

// <button onClick={detectScam}>
// Detect Scam
// </button>

// {result && (

// <div style={{width:150,marginTop:"20px"}}>

// <CircularProgressbar
// value={result.probability}
// text={`${result.probability}%`}
// />

// <p><b>Prediction:</b> {result.prediction}</p>

// <p><b>Type:</b> {result.type}</p>

// </div>

// )}

// </div>

// )

// }

// export default ScamDetector











// import { useState } from "react"
// import axios from "axios"
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"
// import "./scam.css"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// {message}
// )

// setResult(res.data)

// // Save history
// const newHistory = {
// message: message,
// prediction: res.data.prediction,
// probability: res.data.probability
// }

// const stored = JSON.parse(localStorage.getItem("scanHistory")) || []
// stored.push(newHistory)
// localStorage.setItem("scanHistory", JSON.stringify(stored))

// }catch(err){
// console.log(err)
// }

// }

// return(

// <div className="scam-container">

// <h1>🛡 AI Scam Detector</h1>

// <textarea
// placeholder="Paste suspicious message here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// className="scam-textarea"
// />

// <button onClick={detectScam} className="detect-btn">
// Detect Scam
// </button>

// {result && (

// <div className="result-box">

// <div className="meter">

// <CircularProgressbar
// value={result.probability}
// text={`${result.probability}%`}
// styles={buildStyles({
// textColor:"#fff",
// pathColor:
// result.probability > 70 ? "#ff3b3b" :
// result.probability > 40 ? "#ffa500" :
// "#00ff88",
// trailColor:"#1a2638"
// })}
// />

// </div>

// <div className="result-info">

// <h3>Prediction: {result.prediction}</h3>

// <p>Type: {result.type}</p>

// </div>

// </div>

// )}

// </div>

// )

// }

// export default ScamDetector










// import { useState } from "react"
// import axios from "axios"
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// {message}
// )

// setResult(res.data)

// }

// return(

// <div className="page">

// <h1>🛡 AI Scam Detector</h1>

// <div className="card">

// <textarea
// placeholder="Paste suspicious message..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button onClick={detectScam}>
// Detect Scam
// </button>

// </div>

// {result && (

// <div className="result-card">

// <div className="meter">

// <CircularProgressbar
// value={result?.probability || 0}
// text={`${result?.probability || 0}%`}
// styles={buildStyles({
// textColor:"#fff",
// pathColor:
// result?.prediction === "SCAM" ? "#ff3b3b" : "#00ff88",
// trailColor:"#1c2940"
// })}
// />

// </div>

// <div className="result-info">

// <h2>
// {result?.prediction === "SCAM"
// ? "🚨 Scam Detected"
// : "✅ Message Safe"}
// </h2>

// <p><b>Prediction:</b> {result?.prediction}</p>
// <p><b>Type:</b> {result?.type}</p>

// </div>

// </div>

// )}

// </div>

// )

// }

// export default ScamDetector














// import { useState } from "react"
// import axios from "axios"
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// {message}
// )

// setResult(res.data)

// }catch(err){

// console.log("Server Error",err)

// }

// }

// return(

// <div className="scam-page">

// <div className="scam-card">

// <h1>🛡 AI Scam Detector</h1>

// <textarea
// className="scam-textarea"
// placeholder="Paste suspicious message here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button
// className="detect-button"
// onClick={detectScam}
// >
// 🔍 Detect Scam
// </button>

// {result && (

// <div className="result-section">

// <div className="meter">

// <CircularProgressbar
// value={result?.probability || 0}
// text={`${result?.probability || 0}%`}
// styles={buildStyles({
// textColor:"#fff",
// pathColor:
// result?.prediction === "SCAM" ? "#ff3b3b" : "#00ff88",
// trailColor:"#1c2940"
// })}
// />

// </div>

// <div className="result-info">

// <h2>
// {result?.prediction === "SCAM"
// ? "🚨 Scam Detected"
// : "✅ Safe Message"}
// </h2>

// <p><b>Prediction:</b> {result?.prediction}</p>

// <p><b>Type:</b> {result?.type}</p>

// </div>

// </div>

// )}

// </div>

// </div>

// )

// }

// export default ScamDetector








// import { useState } from "react"
// import axios from "axios"
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message }
// )

// setResult(res.data)

// }catch(err){

// console.log("Server Error",err)

// }

// }

// return(

// <div className="scam-page">

// <div className="scam-card">

// <h1>🛡 AI Scam Detector</h1>

// <textarea
// className="scam-textarea"
// placeholder="Paste suspicious message here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button
// className="detect-button"
// onClick={detectScam}
// >
// 🔍 Detect Scam
// </button>

// {result && (

// <div className="result-section">

// <div className="meter">

// <CircularProgressbar
// value={result?.probability || 0}
// text={`${result?.probability || 0}%`}
// styles={buildStyles({
// textColor:"#fff",
// pathColor:
// result?.prediction === "SCAM"
// ? "#ff3b3b"
// : "#00ff88",
// trailColor:"#1c2940"
// })}
// />

// </div>

// <div className="result-info">

// <h2>
// {result?.prediction === "SCAM"
// ? "🚨 Scam Detected"
// : "✅ Safe Message"}
// </h2>

// <p><b>Prediction:</b> {result?.prediction}</p>

// <p><b>Type:</b> {result?.type}</p>

// </div>

// </div>

// )}

// </div>

// </div>

// )

// }

// export default ScamDetector













// import { useState } from "react"
// import axios from "axios"
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message }
// )

// setResult(res.data)

// }catch(err){

// console.log("Server Error",err)

// }

// }

// return(

// <div className="scam-page">

// <div className="scam-card">

// <h1>🛡 AI Scam Detector</h1>

// <textarea
// className="scam-textarea"
// placeholder="Paste suspicious message here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button
// className="detect-button"
// onClick={detectScam}
// >
// 🔍 Detect Scam
// </button>

// {result && (

// <div className="result-section">

// {/* Small Circle Meter */}

// <div className="meter">

// <CircularProgressbar
// value={result?.probability || 0}
// text={`${result?.probability || 0}%`}
// styles={buildStyles({
// textColor:"#fff",
// pathColor:
// result?.prediction === "SCAM" ? "#ff3b3b" : "#00ff88",
// trailColor:"#1c2940"
// })}
// />

// </div>

// <div className="result-info">

// <h2>
// {result?.prediction === "SCAM"
// ? "🚨 Scam Detected"
// : "✅ Safe Message"}
// </h2>

// <p><b>Prediction:</b> {result?.prediction}</p>

// <p><b>Type:</b> {result?.type}</p>

// </div>

// </div>

// )}

// </div>

// </div>

// )

// }

// export default ScamDetector

















// import { useState } from "react"
// import axios from "axios"
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message }
// )

// setResult(res.data)

// }catch(err){

// console.log("Server Error",err)

// }

// }

// return(

// <div className="scam-page">

// <div className="scam-card">

// <h1>🛡 AI Scam Detector</h1>

// <textarea
// className="scam-textarea"
// placeholder="Paste suspicious message here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button
// className="detect-button"
// onClick={detectScam}
// >
// 🔍 Detect Scam
// </button>


// {/* ⭐ RESULT SECTION */}

// {result && (

// <div className="result-section">

// <div className="meter">

// <CircularProgressbar
// value={result?.probability || 0}
// text={`${result?.probability || 0}%`}
// styles={buildStyles({
// textColor:"#fff",
// pathColor:
// result?.prediction === "SCAM" ? "#ff3b3b" : "#22c55e",
// trailColor:"#1c2940"
// })}
// />

// </div>


// <div className="result-info">

// <h2 style={{
// color: result?.prediction === "SCAM" ? "#ff3b3b" : "#22c55e"
// }}>

// {result?.prediction === "SCAM"
// ? "🚨 SCAM DETECTED"
// : "✅ SAFE MESSAGE"}

// </h2>

// <p><b>Prediction:</b> {result?.prediction}</p>

// <p><b>Type:</b> {result?.type}</p>

// </div>

// </div>

// )}

// </div>

// </div>

// )

// }

// export default ScamDetector










// import { useState } from "react"
// import axios from "axios"
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message }
// )

// setResult(res.data)

// }catch(err){

// console.log("Server Error",err)

// }

// }

// return(

// <div className="scam-page">

// <div className="scam-card">

// <h1>🛡 AI Scam Detector</h1>


// {/* ⭐ INPUT SECTION (Textarea + Button aligned) */}

// <div className="input-section">

// <textarea
// className="scam-textarea"
// placeholder="Paste suspicious message here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button
// className="detect-button"
// onClick={detectScam}
// >
// 🔍 Detect Scam
// </button>

// </div>


// {/* ⭐ RESULT SECTION */}

// {result && (

// <div className="result-section">

// <div className="meter">

// <CircularProgressbar
// value={result?.probability || 0}
// text={`${result?.probability || 0}%`}
// styles={buildStyles({
// textColor:"#fff",
// pathColor:
// result?.prediction === "SCAM" ? "#ff3b3b" : "#22c55e",
// trailColor:"#1c2940"
// })}
// />

// </div>


// <div className="result-info">

// <h2
// style={{
// color: result?.prediction === "SCAM" ? "#ff3b3b" : "#22c55e"
// }}
// >

// {result?.prediction === "SCAM"
// ? "🚨 SCAM DETECTED"
// : "✅ SAFE MESSAGE"}

// </h2>

// <p><b>Prediction:</b> {result?.prediction}</p>
// <p><b>Type:</b> {result?.type}</p>

// </div>

// </div>

// )}

// </div>

// </div>

// )

// }

// export default ScamDetector











// import { useState } from "react"
// import axios from "axios"
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message }
// )

// setResult(res.data)

// }catch(err){

// console.log("Server Error",err)

// }

// }

// return(

// <div className="detector-page">

// <div className="detector-container">

// <h1 className="title">🔒 AI Scam Detection System</h1>

// <p className="subtitle">
// AI Powered Cybersecurity Protection
// </p>

// <textarea
// className="detector-textarea"
// placeholder="Paste suspicious message or URL here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button
// className="detect-btn"
// onClick={detectScam}
// >
// Detect Scam
// </button>


// {result && (

// <div className="result-box">

// <h2
// className={
// result.prediction === "SCAM"
// ? "scam-text"
// : "safe-text"
// }
// >

// {result.prediction === "SCAM"
// ? "🚨 Scam Detected"
// : "✅ Safe Message"}

// </h2>

// <p>Risk Score : {result.probability}%</p>

// <div className="meter">

// <CircularProgressbar
// value={result.probability}
// text={`${result.probability}%`}
// styles={buildStyles({
// textColor:"#fff",
// pathColor:
// result.prediction === "SCAM"
// ? "#ff3b3b"
// : "#22c55e",
// trailColor:"#1c2940"
// })}
// />

// </div>

// </div>

// )}

// </div>

// </div>

// )

// }

// export default ScamDetector













// import { useState } from "react"
// import axios from "axios"
// import { Bar } from "react-chartjs-2"
// import "chart.js/auto"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const detectScam = async()=>{

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message }
// )

// // setResult(res.data)


// setResult({
// prediction: res.data.prediction || "SAFE",
// probability: res.data.probability || 0,
// type: res.data.type || "No threat detected"
// })


// }catch(err){

// console.log("Server Error",err)

// }

// }

// if(res.data.prediction === "SCAM"){
// setStats(prev=>({...prev,scam:prev.scam+1}))
// }else{
// setStats(prev=>({...prev,safe:prev.safe+1}))
// }


// return(

// <div className="detector-page">

// <div className="detector-box">

// <h1>🔒 AI Scam Detection System</h1>

// <p className="subtitle">
// AI Powered Cybersecurity Protection
// </p>

// <textarea
// className="detector-textarea"
// placeholder="Paste suspicious message or URL here..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button
// className="detect-btn"
// onClick={detectScam}
// disabled={!message.trim()}
// >
// Detect Scam
// </button>


// {result && (

// <div className="result-panel">

// <h2 className={result.prediction === "SCAM" ? "scam" : "safe"}>

// {result.prediction === "SCAM"
// ? "⚠ Scam Detected"
// : "✅ Safe Message"}

// </h2>


// <p>Risk Score : {result?.probability}%</p>

// <p>AI Confidence : {result?.probability}%</p>

// <p>{result?.type}</p>


// {/* Risk Bar */}

// <div className="risk-bar">

// <div
// className="risk-fill"
// style={{width: `${result.probability}%`}}
// ></div>

// </div>

// </div>

// )}

// </div>

// </div>

// )

// }

// const data = {
// labels:["Scam","Safe"],
// datasets:[
// {
// label:"Detection Analytics",
// data:[stats.scam,stats.safe],
// backgroundColor:["#ff3b3b","#22c55e"]
// }
// ]
// }

// export default ScamDetector













// import { useState } from "react"
// import axios from "axios"
// import { Bar } from "react-chartjs-2"
// import "chart.js/auto"

// function ScamDetector(){

// const [message,setMessage] = useState("")
// const [result,setResult] = useState(null)

// const [stats,setStats] = useState({
// scam:0,
// safe:0
// })

// const detectScam = async()=>{

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message }
// )

// const response = {
// prediction: res.data.prediction || "SAFE",
// probability: res.data.probability || 0,
// type: res.data.type || "No threat detected"
// }

// setResult(response)

// if(response.prediction === "SCAM"){
// setStats(prev=>({...prev,scam:prev.scam+1}))
// }else{
// setStats(prev=>({...prev,safe:prev.safe+1}))
// }

// }catch(err){

// console.log("Server Error",err)

// }

// }

// const data = {
// labels:["Scam","Safe"],
// datasets:[
// {
// label:"Detection Analytics",
// data:[stats.scam,stats.safe],
// backgroundColor:["#ff3b3b","#22c55e"]
// }
// ]
// }

// return(

// <div className="detector-page">

// <div className="detector-layout">

// {/* LEFT SIDE */}

// <div className="detector-box">

// <h1>🔒 AI Scam Detection System</h1>

// <p className="subtitle">
// AI Powered Cybersecurity Protection
// </p>

// <textarea
// className="detector-textarea"
// placeholder="Paste suspicious message..."
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />

// <button
// className="detect-btn"
// onClick={detectScam}
// disabled={!message.trim()}
// >
// Detect Scam
// </button>

// {result && (

// <div className="result-panel">

// <h2 className={result.prediction==="SCAM"?"scam":"safe"}>

// {result.prediction==="SCAM"
// ? "⚠ Scam Detected"
// : "✅ Safe Message"}

// </h2>

// <p>Risk Score : {result.probability}%</p>

// <p>AI Confidence : {result.probability}%</p>

// <p>{result.type}</p>

// <div className="risk-bar">

// <div
// className="risk-fill"
// style={{width: `${result.probability}%`}}
// ></div>

// </div>

// </div>

// )}

// </div>


// {/* RIGHT SIDE CHART */}

// <div className="analytics-box">

// <h2>Detection Analytics</h2>

// <Bar data={data} />

// </div>

// </div>

// </div>

// )

// }

// export default ScamDetector













import { useState } from "react"
import axios from "axios"
import { Bar } from "react-chartjs-2"
import "chart.js/auto"
import { Link, NavLink } from "react-router-dom"
<NavLink to="/history">History</NavLink>

function ScamDetector(){

const [message,setMessage] = useState("")
const [result,setResult] = useState(null)

const [stats,setStats] = useState({
scam:0,
safe:0
})

const detectScam = async()=>{

try{

const res = await axios.post(
"http://localhost:5000/api/check",
{ message }
)

const response = {
prediction: res.data.prediction || "SAFE",
probability: res.data.probability || 0,
type: res.data.type || "No threat detected"
}

setResult(response)

if(response.prediction === "SCAM"){
setStats(prev=>({...prev,scam:prev.scam+1}))
}else{
setStats(prev=>({...prev,safe:prev.safe+1}))
}


/* SAVE HISTORY TO LOCAL STORAGE */

const history = JSON.parse(localStorage.getItem("scamHistory")) || []

history.unshift({
text: message,
prediction: response.prediction,
probability: response.probability,
type: response.type,
module: "AI Scam Detector",
time: new Date().toLocaleString()
})

localStorage.setItem("scamHistory", JSON.stringify(history))


}catch(err){

console.log("Server Error",err)

}

}

const data = {
labels:["Scam","Safe"],
datasets:[
{
label:"Detection Analytics",
data:[stats.scam,stats.safe],
backgroundColor:["#ff3b3b","#22c55e"]
}
]
}

return(

<div className="detector-page">

<div className="detector-layout">

{/* LEFT SIDE */}

<div className="detector-box">

<h1>🔒 AI Scam Detection System</h1>

<p className="subtitle">
AI Powered Cybersecurity Protection
</p>

<textarea
className="detector-textarea"
placeholder="Paste suspicious message..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button
className="detect-btn"
onClick={detectScam}
disabled={!message.trim()}
>
Detect Scam
</button>

{result && (

<div className="result-panel">

<h2 className={result.prediction==="SCAM"?"scam":"safe"}>

{result.prediction==="SCAM"
? "⚠ Scam Detected"
: "✅ Safe Message"}

</h2>

<p>Risk Score : {result.probability}%</p>

<p>AI Confidence : {result.probability}%</p>

<p>{result.type}</p>

<div className="risk-bar">

<div
className="risk-fill"
style={{width: `${result.probability}%`}}
></div>

</div>

</div>

)}

</div>


{/* RIGHT SIDE CHART */}

<div className="analytics-box">

<h2>Detection Analytics</h2>

<Bar data={data} />

</div>

</div>

</div>

)

}

export default ScamDetector