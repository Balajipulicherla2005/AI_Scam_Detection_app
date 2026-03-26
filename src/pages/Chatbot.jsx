// import { useState } from "react"
// import axios from "axios"

// function Chatbot(){

// const [message,setMessage] = useState("")
// const [reply,setReply] = useState("")
// const [loading,setLoading] = useState(false)

// const sendMessage = async () => {

// if(!message) return

// setLoading(true)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/chatbot",
// { message }
// )

// setReply(res.data.reply)

// }catch(error){

// setReply("Server error")

// }

// setLoading(false)

// }

// return(

// <div style={{padding:"30px"}}>

// <h2>🤖 AI Scam Assistant</h2>

// <textarea
// placeholder="Ask something like: Is this message a scam?"
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// style={{
// width:"400px",
// height:"120px",
// padding:"10px"
// }}
// />

// <br/><br/>

// <button onClick={sendMessage}>
// {loading ? "Thinking..." : "Ask AI"}
// </button>

// <br/><br/>

// {reply && (

// <div
// style={{
// background:"#1e293b",
// color:"white",
// padding:"15px",
// borderRadius:"10px",
// width:"400px"
// }}
// >

// <strong>AI Response:</strong>

// <p>{reply}</p>

// </div>

// )}

// </div>

// )

// }

// export default Chatbot









// import { useState } from "react"
// import axios from "axios"

// function Chatbot(){

// const [chat,setChat] = useState("")
// const [reply,setReply] = useState("")
// const [loading,setLoading] = useState(false)

// const askAI = async () => {

// if(!chat) return

// setLoading(true)

// try {

// const res = await axios.post(
// "http://localhost:5000/api/ask-ai",
// { message: chat }
// )

// setReply(res.data.reply)

// } catch (err) {

// setReply("AI server error")

// }

// setLoading(false)

// }

// return(

// <div style={{padding:"40px"}}>

// <h2>🤖 AI Scam Assistant</h2>

// <textarea
// placeholder="Ask something like: Is this message a scam?"
// value={chat}
// onChange={(e)=>setChat(e.target.value)}
// style={{
// width:"500px",
// height:"150px",
// padding:"15px",
// borderRadius:"8px"
// }}
// />

// <br/><br/>

// <button
// onClick={askAI}
// style={{
// padding:"10px 20px",
// background:"#00bfff",
// border:"none",
// borderRadius:"6px",
// color:"white",
// cursor:"pointer"
// }}
// >
// {loading ? "Thinking..." : "Ask AI"}
// </button>

// <br/><br/>

// {reply && (

// <div
// style={{
// background:"#1e293b",
// color:"white",
// padding:"20px",
// borderRadius:"10px",
// width:"500px"
// }}
// >

// <strong>AI Response:</strong>

// <p>{reply}</p>

// </div>

// )}

// </div>

// )

// }

// export default Chatbot
















// import { useState } from "react"
// import axios from "axios"

// function Chatbot(){

// const [chat,setChat] = useState("")
// const [reply,setReply] = useState("")
// const [loading,setLoading] = useState(false)

// const askAI = async () => {

// if(!chat) return

// setLoading(true)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/ask-ai",
// { message: chat }
// )

// setReply(res.data.reply)

// }catch(err){

// console.error(err)
// setReply("⚠️ AI server error")

// }

// setLoading(false)

// }

// return(

// <div style={{padding:"40px"}}>

// <h2>🤖 AI Scam Assistant</h2>

// <textarea
// placeholder="Ask something like: Is this message a scam?"
// value={chat}
// onChange={(e)=>setChat(e.target.value)}
// style={{
// width:"500px",
// height:"150px",
// padding:"15px",
// borderRadius:"8px",
// fontSize:"14px"
// }}
// />

// <br/><br/>

// <button
// onClick={askAI}
// style={{
// padding:"10px 20px",
// background:"#00bfff",
// border:"none",
// borderRadius:"6px",
// color:"white",
// cursor:"pointer",
// fontSize:"15px"
// }}
// >
// {loading ? "Thinking..." : "Ask AI"}
// </button>

// <br/><br/>

// {reply && (

// <div
// style={{
// background:"#1e293b",
// color:"white",
// padding:"20px",
// borderRadius:"10px",
// width:"500px"
// }}
// >

// <strong>AI Response:</strong>

// <p style={{marginTop:"10px"}}>
// {reply}
// </p>

// </div>

// )}

// </div>

// )

// }

// export default Chatbot

















// import { useState } from "react"
// import axios from "axios"

// function Chatbot(){

// const [chat,setChat] = useState("")
// const [reply,setReply] = useState("")
// const [loading,setLoading] = useState(false)

// const askAI = async () => {

// if(!chat) return

// setLoading(true)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/ask-ai",
// { message: chat }
// )

// setReply(res.data.reply)


// // SAVE HISTORY TO LOCAL STORAGE

// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({
// module: "AI Assistant",
// text: chat,
// prediction: "AI Response",
// probability: 0,
// type: res.data.reply,
// time: new Date().toLocaleString()
// })

// localStorage.setItem("scamHistory", JSON.stringify(history))


// }catch(err){

// console.error(err)
// setReply("⚠️ AI server error")

// }

// setLoading(false)

// }

// return(

// <div style={{padding:"40px"}}>

// <h2>🤖 AI Scam Assistant</h2>

// <textarea
// placeholder="Ask something like: Is this message a scam?"
// value={chat}
// onChange={(e)=>setChat(e.target.value)}
// style={{
// width:"500px",
// height:"150px",
// padding:"15px",
// borderRadius:"8px",
// fontSize:"14px"
// }}
// />

// <br/><br/>

// <button
// onClick={askAI}
// style={{
// padding:"10px 20px",
// background:"#00bfff",
// border:"none",
// borderRadius:"6px",
// color:"white",
// cursor:"pointer",
// fontSize:"15px"
// }}
// >
// {loading ? "Thinking..." : "Ask AI"}
// </button>

// <br/><br/>

// {reply && (

// <div
// style={{
// background:"#1e293b",
// color:"white",
// padding:"20px",
// borderRadius:"10px",
// width:"500px"
// }}
// >

// <strong>AI Response:</strong>

// <p style={{marginTop:"10px"}}>
// {reply}
// </p>

// </div>

// )}

// </div>

// )

// }

// export default Chatbot


















import { useState } from "react"
import axios from "axios"

function Chatbot(){

const [chat,setChat] = useState("")
const [reply,setReply] = useState("")
const [loading,setLoading] = useState(false)

const askAI = async () => {

if(!chat.trim()) return

setLoading(true)

try{

const res = await axios.post(
"http://localhost:5000/api/ask-ai",
{ message: chat }
)

const aiReply = res.data.reply

setReply(aiReply)


// SAVE HISTORY TO LOCAL STORAGE

const history = JSON.parse(localStorage.getItem("scamHistory")) || []

history.unshift({
module: "AI Assistant",
text: chat,
prediction: "AI Response",
probability: 0,
type: aiReply,
time: new Date().toLocaleString()
})

localStorage.setItem("scamHistory", JSON.stringify(history))

}catch(err){

console.error(err)
setReply("⚠️ AI server error")

}

setLoading(false)

}

return(

<div style={{padding:"40px"}}>

<h2>🤖 AI Scam Assistant</h2>

<textarea
placeholder="Ask something like: Is this message a scam?"
value={chat}
onChange={(e)=>setChat(e.target.value)}
style={{
width:"500px",
height:"150px",
padding:"15px",
borderRadius:"8px",
fontSize:"14px"
}}
/>

<br/><br/>

<button
onClick={askAI}
style={{
padding:"10px 20px",
background:"#00bfff",
border:"none",
borderRadius:"6px",
color:"white",
cursor:"pointer",
fontSize:"15px"
}}
>
{loading ? "Thinking..." : "Ask AI"}
</button>

<br/><br/>

{reply && (

<div
style={{
background:"#1e293b",
color:"white",
padding:"20px",
borderRadius:"10px",
width:"500px"
}}
>

<strong>AI Response:</strong>

<p style={{marginTop:"10px"}}>
{reply}
</p>

</div>

)}

</div>

)

}

export default Chatbot