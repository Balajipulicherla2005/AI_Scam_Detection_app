// function History(){

// return(

// <div>

// <h2>Scam Detection History</h2>

// <table>

// <tr>
// <th>Message</th>
// <th>Result</th>
// </tr>

// <tr>
// <td>Win 10,000 now</td>
// <td>Scam</td>
// </tr>

// </table>

// </div>

// )

// }

// export default History











// function History(){

// return(

// <div style={{padding:"30px",color:"white"}}>

// <h2>Scam History</h2>

// <table border="1">

// <tr>
// <th>Message</th>
// <th>Result</th>
// </tr>

// <tr>
// <td>Win 10,000 now</td>
// <td>Scam</td>
// </tr>

// </table>

// </div>

// )

// }

// export default History













// import { useEffect, useState } from "react"

// function History(){

// const [history,setHistory] = useState([])

// useEffect(()=>{

// const stored = JSON.parse(localStorage.getItem("scanHistory")) || []
// setHistory(stored)

// },[])

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

// export default History










// import { useEffect, useState } from "react"

// function History(){

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

// export default History















// import { useEffect, useState } from "react"

// function History(){

// const [history,setHistory] = useState([])

// useEffect(()=>{

// const stored = JSON.parse(localStorage.getItem("scanHistory")) || []

// setHistory(stored)

// },[])

// return(

// <div className="history-page">

// <h1>📊 Detection History</h1>

// <div className="history-grid">

// {history.map((item,index)=>(

// <div className="history-card" key={index}>

// <p className="history-message">
// {item.message}
// </p>

// <p
// className={
// item.prediction === "SCAM"
// ? "prediction-scam"
// : "prediction-safe"
// }
// >

// {item.prediction === "SCAM"
// ? "🚨 SCAM"
// : "✅ SAFE"}

// </p>

// <p className="probability">
// Risk Score: {item.probability}%
// </p>

// </div>

// ))}

// </div>

// </div>

// )

// }

// export default History










// import { useEffect, useState } from "react"

// function History(){

// const [history,setHistory] = useState([])

// useEffect(()=>{

// const data = JSON.parse(localStorage.getItem("scamHistory")) || []

// setHistory(data)

// },[])

// return(

// <div style={{padding:"40px"}}>

// <h2>📊 Detection History</h2>

// {history.length === 0 && <p>No history found</p>}

// {history.map((item,index)=>(
// <div key={index} style={{
// border:"1px solid #1f2937",
// padding:"15px",
// marginTop:"15px",
// borderRadius:"10px"
// }}>

// <p><b>Text:</b> {item.text}</p>

// <p><b>Prediction:</b> {item.prediction}</p>

// <p><b>Probability:</b> {item.probability}%</p>

// <p><b>Type:</b> {item.type}</p>

// <p><b>Time:</b> {item.time}</p>

// </div>
// ))}

// </div>

// )

// }

// <span style={{color:item.prediction==="SCAM"?"red":"green"}}>
// {item.prediction}
// </span>

// export default History















import { useEffect, useState } from "react"

function History(){

const [history,setHistory] = useState([])

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("scamHistory")) || []

setHistory(data)

},[])

return(

<div style={{padding:"40px"}}>

<h2>📊 Detection History</h2>

{history.length === 0 && <p>No history available</p>}

{history.map((item,index)=>(

<div
key={index}
style={{
border:"1px solid #1f2937",
padding:"15px",
marginTop:"15px",
borderRadius:"10px"
}}
>

<p><b>Module:</b> {item.module}</p>

<p><b>Text:</b> {item.text}</p>

<p>
<b>Prediction:</b>{" "}
<span style={{color:item.prediction==="SCAM"?"red":"green"}}>
{item.prediction}
</span>
</p>

<p><b>Probability:</b> {item.probability}%</p>

<p><b>Type:</b> {item.type}</p>

<p><b>Time:</b> {item.time}</p>

</div>

))}

</div>

)

}

export default History