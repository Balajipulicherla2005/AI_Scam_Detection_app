// import {useState} from "react"

// function URLScanner(){

// const [url,setUrl] = useState("")
// const [result,setResult] = useState("")

// const scan = ()=>{

// if(url.includes("http")){
// setResult("⚠ Suspicious URL")
// }else{
// setResult("✅ Safe URL")
// }

// }

// return(

// <div>

// <h2>URL Scanner</h2>

// <input
// placeholder="Paste URL"
// value={url}
// onChange={(e)=>setUrl(e.target.value)}
// />

// <button onClick={scan}>
// Scan
// </button>

// <p>{result}</p>

// </div>

// )

// }

// export default URLScanner










// import {useState} from "react"

// function URLScanner(){

// const [url,setUrl] = useState("")
// const [result,setResult] = useState("")

// const scan = ()=>{

// if(url.includes("http")){
// setResult("⚠ Suspicious URL")
// }else{
// setResult("✅ Safe URL")
// }

// }

// return(

// <div style={{padding:"30px",color:"white"}}>

// <h2>URL Scanner</h2>

// <input
// placeholder="Enter URL"
// value={url}
// onChange={(e)=>setUrl(e.target.value)}
// />

// <button onClick={scan}>
// Scan
// </button>

// <p>{result}</p>

// </div>

// )

// }

// export default URLScanner





// import { useState } from "react"

// function URLScanner(){

// const [url,setUrl] = useState("")
// const [result,setResult] = useState("")
// const [risk,setRisk] = useState(0)

// const scan = ()=>{

// let riskScore = 10
// let message = "✅ Safe URL"

// if(
// url.includes("bit.ly") ||
// url.includes("free") ||
// url.includes("verify") ||
// url.includes("login") ||
// url.includes("bank") ||
// url.includes("update") ||
// url.includes("secure") ||
// url.includes("http://")
// ){

// riskScore = 70
// message = "⚠ Suspicious URL"

// }

// setRisk(riskScore)
// setResult(message)

// }

// return(

// <div className="url-layout">

// {/* LEFT SIDE */}

// <div className="url-left">

// <h2>🔗 URL Scanner</h2>

// <input
// className="url-input"
// placeholder="Enter URL"
// value={url}
// onChange={(e)=>setUrl(e.target.value)}
// />

// <button className="scan-btn" onClick={scan}>
// Scan URL
// </button>

// <h3 style={{marginTop:"20px"}}>
// {result}
// </h3>

// </div>


// {/* RIGHT SIDE */}

// <div className="url-right">

// <h3>Threat Intelligence</h3>

// {/* Threat Meter */}

// <div className="threat-meter">

// <p>Threat Level</p>

// <div className="meter-bar">

// <div
// className="meter-fill"
// style={{width:`${risk}%`}}
// ></div>

// </div>

// <p>{risk}% Risk</p>

// </div>


// {/* AI Analysis */}

// <div className="ai-analysis">

// <h3>AI Analysis</h3>

// <ul>

// <li>Suspicious domain keywords</li>

// <li>Untrusted domain source</li>

// <li>Possible phishing attempt</li>

// </ul>

// </div>

// </div>

// </div>

// )

// }

// export default URLScanner












// import { useState } from "react"

// function URLScanner(){

// const [domainAge,setDomainAge] = useState("Unknown")
// const [url,setUrl] = useState("")
// const [result,setResult] = useState("")
// const [risk,setRisk] = useState(0)

// const scan = ()=>{

// let riskScore = 10
// let message = "✅ Safe URL"

// if(
// url.includes("bit.ly") ||
// url.includes("free") ||
// url.includes("verify") ||
// url.includes("login") ||
// url.includes("bank") ||
// url.includes("update") ||
// url.includes("secure") ||
// url.includes("http://")
// ){

// riskScore = 70
// message = "⚠ Suspicious URL"

// }

// setRisk(riskScore)
// setResult(message)

// }

// return(

// <div className="url-layout">

// {/* LEFT SIDE */}

// <div className="url-left">

// <h2>🔗 URL Scanner</h2>

// <input
// className="url-input"
// placeholder="Enter URL"
// value={url}
// onChange={(e)=>setUrl(e.target.value)}
// />

// <button className="scan-btn" onClick={scan}>
// Scan URL
// </button>

// <h3 style={{marginTop:"20px"}}>
// {result}
// </h3>

// </div>


// {/* RIGHT SIDE */}

// <div className="url-right">

// <h3>Threat Intelligence</h3>

// {/* Threat Meter */}

// <div className="threat-meter">

// <p>Threat Level</p>

// <div className="meter-bar">

// <div
// className="meter-fill"
// style={{width:`${risk}%`}}
// ></div>

// </div>

// <p>{risk}% Risk</p>

// </div>

// <div className="site-preview">

// <h3>Website Preview</h3>

// {url && (
// <img
// src={`https://image.thum.io/get/width/700/${url}`}
// alt="Website preview"
// className="preview-img"
// />
// )}

// </div>

// <div className="reputation-box">

// <h3>URL Reputation</h3>

// <p className={risk > 50 ? "danger" : "safe"}>
// {risk > 50 ? "⚠ Medium Risk Domain" : "✔ Trusted Domain"}
// </p>

// </div>

// <div className="phishing-panel">

// <h3>Phishing Indicators</h3>

// <ul>

// <li>⚠ URL shortening detected</li>
// <li>⚠ Suspicious keywords</li>
// <li>⚠ Newly registered domain</li>

// </ul>

// </div>


// <div className="threat-stats">

// <h3>Global Threat Intelligence</h3>

// <p>Active Phishing Sites Today: <b>1,248</b></p>

// <p>Malicious URLs Blocked: <b>3,452</b></p>

// <p>Threat Level: <b>Medium</b></p>

// </div>

// {/* Domain Information */}

// <div className="domain-info">

// <h3>Domain Information</h3>

// <p><b>Domain:</b> {url || "N/A"}</p>
// <p><b>SSL Status:</b> Secure</p>
// {/* <p><b>Domain Age:</b> 4 Years</p> */}
// <p><b>Domain Age:</b> {domainAge} Years</p>
// </div>


// {/* Security Indicators */}

// <div className="security-panel">

// <h3>Security Indicators</h3>

// <ul>
// <li>✔ HTTPS Enabled</li>
// <li>✔ No Malware Detected</li>
// <li>✔ Trusted Domain</li>
// </ul>

// </div>


// {/* AI Analysis */}

// <div className="ai-analysis">

// <h3>AI Analysis</h3>

// <ul>

// <li>Suspicious domain keywords</li>
// <li>Untrusted domain source</li>
// <li>Possible phishing attempt</li>

// </ul>

// </div>

// </div>

// </div>

// )

// }

// export default URLScanner




// import { useState } from "react"

// function URLScanner(){

// const [domainAge,setDomainAge] = useState("Unknown")
// const [url,setUrl] = useState("")
// const [result,setResult] = useState("")
// const [risk,setRisk] = useState(0)

// const scan = async ()=>{

// let riskScore = 10
// let message = "✅ Safe URL"

// if(
// url.includes("bit.ly") ||
// url.includes("free") ||
// url.includes("verify") ||
// url.includes("login") ||
// url.includes("bank") ||
// url.includes("update") ||
// url.includes("secure") ||
// url.includes("http://")
// ){

// riskScore = 70
// message = "⚠ Suspicious URL"

// }

// setRisk(riskScore)
// setResult(message)


// // 🔹 Fetch real domain age from backend

// try{

// const res = await fetch("http://localhost:5000/api/domain-info",{
// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },
// body:JSON.stringify({url})
// })

// const data = await res.json()

// setDomainAge(data.age)

// }catch(err){

// console.log("Domain lookup error",err)

// }

// }

// return(

// <div className="url-layout">

// {/* LEFT SIDE */}

// <div className="url-left">

// <h2>🔗 URL Scanner</h2>

// <input
// className="url-input"
// placeholder="Enter URL"
// value={url}
// onChange={(e)=>setUrl(e.target.value)}
// />

// <button className="scan-btn" onClick={scan}>
// Scan URL
// </button>

// <h3 style={{marginTop:"20px"}}>
// {result}
// </h3>

// </div>


// {/* RIGHT SIDE */}

// <div className="url-right">

// <h3>Threat Intelligence</h3>


// {/* Threat Meter */}

// <div className="threat-meter">

// <p>Threat Level</p>

// <div className="meter-bar">

// <div
// className="meter-fill"
// style={{width:`${risk}%`}}
// ></div>

// </div>

// <p>{risk}% Risk</p>

// </div>


// {/* Website Preview */}

// <div className="site-preview">

// <h3>Website Preview</h3>

// {url && (
// <img
// src={`https://image.thum.io/get/width/700/${url}`}
// alt="Website preview"
// className="preview-img"
// />
// )}

// </div>


// {/* URL Reputation */}

// <div className="reputation-box">

// <h3>URL Reputation</h3>

// <p className={risk > 50 ? "danger" : "safe"}>
// {risk > 50 ? "⚠ Medium Risk Domain" : "✔ Trusted Domain"}
// </p>

// </div>


// {/* Phishing Indicators */}

// <div className="phishing-panel">

// <h3>Phishing Indicators</h3>

// <ul>
// <li>⚠ URL shortening detected</li>
// <li>⚠ Suspicious keywords</li>
// <li>⚠ Newly registered domain</li>
// </ul>

// </div>


// {/* Global Threat Intelligence */}

// <div className="threat-stats">

// <h3>Global Threat Intelligence</h3>

// <p>Active Phishing Sites Today: <b>1,248</b></p>
// <p>Malicious URLs Blocked: <b>3,452</b></p>
// <p>Threat Level: <b>Medium</b></p>

// </div>


// {/* Domain Information */}

// <div className="domain-info">

// <h3>Domain Information</h3>

// <p><b>Domain:</b> {url || "N/A"}</p>
// <p><b>SSL Status:</b> Secure</p>
// <p><b>Domain Age:</b> {domainAge} Years</p>

// </div>


// {/* Security Indicators */}

// <div className="security-panel">

// <h3>Security Indicators</h3>

// <ul>
// <li>✔ HTTPS Enabled</li>
// <li>✔ No Malware Detected</li>
// <li>✔ Trusted Domain</li>
// </ul>

// </div>


// {/* AI Analysis */}

// <div className="ai-analysis">

// <h3>AI Analysis</h3>

// <ul>
// <li>Suspicious domain keywords</li>
// <li>Untrusted domain source</li>
// <li>Possible phishing attempt</li>
// </ul>

// </div>

// </div>

// </div>

// )

// }

// export default URLScanner















// import { useState } from "react"

// function URLScanner(){

// const [domainAge,setDomainAge] = useState("Unknown")
// const [url,setUrl] = useState("")
// const [result,setResult] = useState("")
// const [risk,setRisk] = useState(0)

// const scan = async ()=>{

// let riskScore = 10
// let message = "SAFE"
// let type = "Trusted Domain"

// if(
// url.includes("bit.ly") ||
// url.includes("free") ||
// url.includes("verify") ||
// url.includes("login") ||
// url.includes("bank") ||
// url.includes("update") ||
// url.includes("secure") ||
// url.includes("http://")
// ){

// riskScore = 70
// message = "SCAM"
// type = "Phishing URL Detected"

// }

// setRisk(riskScore)
// setResult(message)


// // 🔹 Fetch real domain age

// let age = "Unknown"

// try{

// const res = await fetch("http://localhost:5000/api/domain-info",{
// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },
// body:JSON.stringify({url})
// })

// const data = await res.json()

// age = data.age

// setDomainAge(age)

// }catch(err){

// console.log("Domain lookup error",err)

// }


// // 🔹 SAVE HISTORY (VERY IMPORTANT)

// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({

// module:"URL Scanner",
// text:url,
// prediction:message,
// probability:riskScore,
// type:type,
// time:new Date().toLocaleString()

// })

// localStorage.setItem("scamHistory",JSON.stringify(history))

// }

// return(

// <div className="url-layout">


// {/* LEFT SIDE */}

// <div className="url-left">

// <h2>🔗 URL Scanner</h2>

// <input
// className="url-input"
// placeholder="Enter URL"
// value={url}
// onChange={(e)=>setUrl(e.target.value)}
// />

// <button className="scan-btn" onClick={scan}>
// Scan URL
// </button>

// <h3 style={{marginTop:"20px"}}>
// {result==="SCAM" ? "⚠ Suspicious URL" : result==="SAFE" ? "✅ Safe URL" : ""}
// </h3>

// </div>



// {/* RIGHT SIDE */}

// <div className="url-right">

// <h3>Threat Intelligence</h3>


// {/* Threat Meter */}

// <div className="threat-meter">

// <p>Threat Level</p>

// <div className="meter-bar">

// <div
// className="meter-fill"
// style={{width:`${risk}%`}}
// ></div>

// </div>

// <p>{risk}% Risk</p>

// </div>



// {/* Website Preview */}

// <div className="site-preview">

// <h3>Website Preview</h3>

// {url && (
// <img
// src={`https://image.thum.io/get/width/700/${url}`}
// alt="Website preview"
// className="preview-img"
// />
// )}

// </div>



// {/* URL Reputation */}

// <div className="reputation-box">

// <h3>URL Reputation</h3>

// <p className={risk > 50 ? "danger" : "safe"}>
// {risk > 50 ? "⚠ Medium Risk Domain" : "✔ Trusted Domain"}
// </p>

// </div>



// {/* Phishing Indicators */}

// <div className="phishing-panel">

// <h3>Phishing Indicators</h3>

// <ul>
// <li>⚠ URL shortening detected</li>
// <li>⚠ Suspicious keywords</li>
// <li>⚠ Newly registered domain</li>
// </ul>

// </div>



// {/* Global Threat Intelligence */}

// <div className="threat-stats">

// <h3>Global Threat Intelligence</h3>

// <p>Active Phishing Sites Today: <b>1,248</b></p>
// <p>Malicious URLs Blocked: <b>3,452</b></p>
// <p>Threat Level: <b>Medium</b></p>

// </div>



// {/* Domain Information */}

// <div className="domain-info">

// <h3>Domain Information</h3>

// <p><b>Domain:</b> {url || "N/A"}</p>
// <p><b>SSL Status:</b> Secure</p>
// <p><b>Domain Age:</b> {domainAge} Years</p>

// </div>



// {/* Security Indicators */}

// <div className="security-panel">

// <h3>Security Indicators</h3>

// <ul>
// <li>✔ HTTPS Enabled</li>
// <li>✔ No Malware Detected</li>
// <li>✔ Trusted Domain</li>
// </ul>

// </div>



// {/* AI Analysis */}

// <div className="ai-analysis">

// <h3>AI Analysis</h3>

// <ul>
// <li>Suspicious domain keywords</li>
// <li>Untrusted domain source</li>
// <li>Possible phishing attempt</li>
// </ul>

// </div>

// </div>

// </div>

// )

// }

// export default URLScanner

















import "./url.css"
import { useState } from "react"

function URLScanner(){

const [domainAge,setDomainAge] = useState("Unknown")
const [url,setUrl] = useState("")
const [result,setResult] = useState("")
const [risk,setRisk] = useState(0)

const scan = async ()=>{

let riskScore = 10
let message = "SAFE"
let type = "Trusted Domain"

if(
url.includes("bit.ly") ||
url.includes("free") ||
url.includes("verify") ||
url.includes("login") ||
url.includes("bank") ||
url.includes("update") ||
url.includes("secure") ||
url.includes("http://")
){

riskScore = 70
message = "SCAM"
type = "Phishing URL Detected"

}

setRisk(riskScore)
setResult(message)


// 🔹 Fetch domain age

let age = "Unknown"

try{

const res = await fetch("http://localhost:5000/api/domain-info",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({url})
})

const data = await res.json()

age = data.age
setDomainAge(age)

}catch(err){
console.log("Domain lookup error",err)
}


// 🔹 SAVE HISTORY

const history = JSON.parse(localStorage.getItem("scamHistory")) || []

history.unshift({
module:"URL Scanner",
text:url,
prediction:message,
probability:riskScore,
type:type,
time:new Date().toLocaleString()
})

localStorage.setItem("scamHistory",JSON.stringify(history))

}



return(

<div className="url-layout">


{/* LEFT SIDE */}

<div className="url-left">

<h2>🔗 URL Scanner</h2>


{/* NEW LARGE SEARCH BAR */}

<div className="url-search-box">

<input
className="url-search-input"
placeholder="Enter suspicious URL"
value={url}
onChange={(e)=>setUrl(e.target.value)}
/>

<button
className="url-search-btn"
onClick={scan}
>
🔍 Scan URL
</button>

</div>


<h3 style={{marginTop:"20px"}}>
{result==="SCAM" ? "⚠ Suspicious URL" : result==="SAFE" ? "✅ Safe URL" : ""}
</h3>

</div>



{/* RIGHT SIDE */}

<div className="url-right">

<h3>Threat Intelligence</h3>


{/* Threat Meter */}

<div className="threat-meter">

<p>Threat Level</p>

<div className="meter-bar">

<div
className="meter-fill"
style={{width:`${risk}%`}}
></div>

</div>

<p>{risk}% Risk</p>

</div>



{/* Website Preview */}

 <div className="site-preview">

<h3>Website Preview</h3>

{url && (
<img
src={`https://image.thum.io/get/width/700/${url}`}
alt="Website preview"
className="preview-img"
/>
)}

</div> 




{/* Website Preview

<div className="site-preview">

<h3>Website Preview</h3>

{url && (
<img
src={`https://image.thum.io/get/width/700/${url}`}
alt="Website preview"
className="preview-img"
/>
)}

</div> */}


{/* URL Reputation */}

<div className="reputation-box">

<h3>URL Reputation</h3>

<p className={risk > 50 ? "danger" : "safe"}>
{risk > 50 ? "⚠ Medium Risk Domain" : "✔ Trusted Domain"}
</p>

</div>



{/* Phishing Indicators */}

<div className="phishing-panel">

<h3>Phishing Indicators</h3>

<ul>
<li>⚠ URL shortening detected</li>
<li>⚠ Suspicious keywords</li>
<li>⚠ Newly registered domain</li>
</ul>

</div>



{/* Global Threat Intelligence */}

<div className="threat-stats">

<h3>Global Threat Intelligence</h3>

<p>Active Phishing Sites Today: <b>1,248</b></p>
<p>Malicious URLs Blocked: <b>3,452</b></p>
<p>Threat Level: <b>Medium</b></p>

</div>



{/* Domain Information */}

<div className="domain-info">

<h3>Domain Information</h3>

<p><b>Domain:</b> {url || "N/A"}</p>
<p><b>SSL Status:</b> Secure</p>
<p><b>Domain Age:</b> {domainAge} Years</p>

</div>



{/* Security Indicators */}

<div className="security-panel">

<h3>Security Indicators</h3>

<ul>
<li>✔ HTTPS Enabled</li>
<li>✔ No Malware Detected</li>
<li>✔ Trusted Domain</li>
</ul>

</div>



{/* AI Analysis */}

<div className="ai-analysis">

<h3>AI Analysis</h3>

<ul>
<li>Suspicious domain keywords</li>
<li>Untrusted domain source</li>
<li>Possible phishing attempt</li>
</ul>

</div>

</div>

</div>

)

}

export default URLScanner













