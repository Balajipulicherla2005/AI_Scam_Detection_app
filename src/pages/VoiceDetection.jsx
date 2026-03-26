// import {useState} from "react"

// function VoiceDetector(){

// const [text,setText] = useState("")

// const startListening = ()=>{

// const recognition = new window.webkitSpeechRecognition()

// recognition.onresult = (event)=>{
// setText(event.results[0][0].transcript)
// }

// recognition.start()

// }

// return(

// <div>

// <h2>Voice Scam Detection</h2>

// <button onClick={startListening}>
// 🎤 Start Recording
// </button>

// <p>{text}</p>

// </div>

// )

// }

// export default VoiceDetector












// import { useState } from "react"
// import axios from "axios"

// function VoiceDetection(){

// const [text,setText] = useState("")
// const [result,setResult] = useState("")

// const startRecording = async ()=>{

// // Example simulated voice text
// const voiceText = "Scan this link immediately send 5,00,000 amount"

// setText(voiceText)

// try{

// const res = await axios.post("http://localhost:5000/api/check",{
// message: voiceText
// })

// setResult(res.data.result)

// }catch(err){
// console.log(err)
// }

// }

// return(

// <div style={{padding:"40px"}}>

// <h2>Voice Scam Detection</h2>

// <button onClick={startRecording}>
// 🎤 Start Recording
// </button>

// <p style={{marginTop:"20px"}}>{text}</p>

// {result && (
// <h3>
// Result: {result}
// </h3>
// )}

// </div>

// )

// }

// export default VoiceDetection











// import { useState } from "react"
// import axios from "axios"

// function VoiceDetection(){

// const [text,setText] = useState("")
// const [result,setResult] = useState("")
// const [listening,setListening] = useState(false)

// const startRecording = ()=>{

// const SpeechRecognition =
// window.SpeechRecognition || window.webkitSpeechRecognition

// const recognition = new SpeechRecognition()

// recognition.lang = "en-US"
// recognition.start()

// setListening(true)

// recognition.onresult = async (event)=>{

// const voiceText = event.results[0][0].transcript

// setText(voiceText)
// setListening(false)

// try{

// const res = await axios.post("http://localhost:5000/api/check",{
// message: voiceText
// })

// setResult(res.data.scam ? "Scam" : "Safe")

// }catch(err){
// console.log(err)
// }

// }

// }

// return(

// <div style={{padding:"40px"}}>

// <h2>Voice Scam Detection</h2>

// <button onClick={startRecording}>
// 🎤 Start Recording
// </button>

// {listening && <p>Listening...</p>}

// {text && (
// <p style={{marginTop:"20px"}}>
// Detected Text: {text}
// </p>
// )}

// {result && (
// <h3 style={{color: result==="Scam" ? "red" : "green"}}>
// Result: {result}
// </h3>
// )}

// </div>

// )

// }

// export default VoiceDetection

















// import { useState } from "react"
// import axios from "axios"

// function VoiceDetection(){

// const [text,setText] = useState("")
// const [result,setResult] = useState("")
// const [prediction,setPrediction] = useState("")
// const [probability,setProbability] = useState(0)
// const [type,setType] = useState("")
// const [listening,setListening] = useState(false)

// const startRecording = ()=>{

// const SpeechRecognition =
// window.SpeechRecognition || window.webkitSpeechRecognition

// const recognition = new SpeechRecognition()

// recognition.lang = "en-US"
// recognition.start()

// setListening(true)

// // recognition.onresult = async (event)=>{

// // const voiceText = event.results[0][0].transcript

// // setText(voiceText)
// // setListening(false)

// // try{

// // const res = await axios.post("http://localhost:5000/api/check",{
// // message: voiceText
// // })


// recognition.onresult = async (event)=>{

// const voiceText = event.results[0][0].transcript

// setText(voiceText)
// setListening(false)

// try{

// const res = await axios.post("http://localhost:5000/api/check",{
// message: voiceText
// })

// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)


// // SAVE HISTORY
// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({
// text: voiceText,
// prediction: res.data.prediction,
// probability: res.data.probability,
// type: res.data.type,
// module: "Voice Detection",
// time: new Date().toLocaleString()
// })

// localStorage.setItem("scamHistory", JSON.stringify(history))

// // }catch(err){
// // console.log(err)
// // }

// // }


// // setResult(res.data.scam ? "Scam" : "Safe")
// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)

// }catch(err){
// console.log(err)
// }

// }

// }

// return(

// <div style={{padding:"40px"}}>

// <h2>Voice Scam Detection</h2>

// <button onClick={startRecording}>
// 🎤 Start Recording
// </button>

// {listening && <p>Listening...</p>}

// {text && (
// <p style={{marginTop:"20px"}}>
// Detected Text: {text}
// </p>
// )}

// {result && (
// <div style={{marginTop:"20px"}}>

// <h3 style={{color: result==="Scam" ? "red" : "green"}}>
// Result: {result}
// </h3>

// <p>Prediction: {prediction}</p>
// <p>Probability: {probability}%</p>
// <p>Type: {type}</p>

// </div>
// )}

// </div>

// )

// }

// export default VoiceDetection





// import { useState } from "react"
// import axios from "axios"

// function VoiceDetection(){

// const [text,setText] = useState("")
// const [result,setResult] = useState("")
// const [prediction,setPrediction] = useState("")
// const [probability,setProbability] = useState(0)
// const [type,setType] = useState("")
// const [listening,setListening] = useState(false)



// // START RECORDING

// const startRecording = ()=>{

// const SpeechRecognition =
// window.SpeechRecognition || window.webkitSpeechRecognition

// const recognition = new SpeechRecognition()

// recognition.lang = "en-US"
// recognition.start()

// setListening(true)

// recognition.onresult = async (event)=>{

// const voiceText = event.results[0][0].transcript

// setText(voiceText)
// setListening(false)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message: voiceText }
// )

// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)


// // SAVE HISTORY

// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({
// text: voiceText,
// prediction: res.data.prediction,
// probability: res.data.probability,
// type: res.data.type,
// module: "Voice Detection",
// time: new Date().toLocaleString()
// })

// localStorage.setItem("scamHistory", JSON.stringify(history))

// }catch(err){
// console.log(err)
// }

// }

// }



// // AUDIO FILE UPLOAD

// const handleUpload = async (e)=>{

// const file = e.target.files[0]

// if(!file) return


// // Demo audio text simulation
// const fakeText = "Uploaded audio content detected"

// setText(fakeText)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message: fakeText }
// )

// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)


// // SAVE HISTORY

// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({
// text: fakeText,
// prediction: res.data.prediction,
// probability: res.data.probability,
// type: res.data.type,
// module: "Voice Detection",
// time: new Date().toLocaleString()
// })

// localStorage.setItem("scamHistory", JSON.stringify(history))

// }catch(err){
// console.log(err)
// }

// }



// return(

// <div className="voice-page">

// <h1 className="voice-title">
// 🎤 Voice Scam Detection
// </h1>


// <div className="voice-card">


// <button
// className="voice-btn"
// onClick={startRecording}
// >
// 🎙 Start Recording
// </button>



// {/* Upload Button */}

// <label className="upload-btn">

// 📂 Upload Audio

// <input
// type="file"
// accept="audio/*"
// onChange={handleUpload}
// hidden
// />

// </label>



// {listening && (

// <p className="listening">
// 🎧 Listening...
// </p>

// )}



// {text && (

// <div className="voice-text">

// <b>Detected Text:</b>

// <p>{text}</p>

// </div>

// )}



// {result && (

// <div className="voice-result">

// <h2 style={{color: result==="SCAM" ? "red" : "lime"}}>

// {result==="SCAM"
// ? "⚠ Scam Voice Detected"
// : "✅ Safe Voice"}

// </h2>

// <p>Prediction: {prediction}</p>

// <p>Probability: {probability}%</p>

// <p>Type: {type}</p>

// </div>

// )}


// </div>

// </div>

// )

// }

// export default VoiceDetection













// import { useState } from "react"
// import axios from "axios"
// import "./voice.css"

// function VoiceDetection(){

// const [text,setText] = useState("")
// const [result,setResult] = useState("")
// const [prediction,setPrediction] = useState("")
// const [probability,setProbability] = useState(0)
// const [type,setType] = useState("")
// const [listening,setListening] = useState(false)


// // START RECORDING

// const startRecording = ()=>{

// const SpeechRecognition =
// window.SpeechRecognition || window.webkitSpeechRecognition

// if(!SpeechRecognition){
// alert("Speech recognition not supported in this browser")
// return
// }

// const recognition = new SpeechRecognition()

// recognition.lang = "en-US"
// recognition.start()

// setListening(true)

// recognition.onresult = async (event)=>{

// const voiceText = event.results[0][0].transcript

// setText(voiceText)
// setListening(false)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message: voiceText }
// )

// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)


// // SAVE HISTORY

// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({
// text: voiceText,
// prediction: res.data.prediction,
// probability: res.data.probability,
// type: res.data.type,
// module: "Voice Detection",
// time: new Date().toLocaleString()
// })

// localStorage.setItem("scamHistory", JSON.stringify(history))

// }catch(err){
// console.log(err)
// }

// }

// }



// // AUDIO FILE UPLOAD

// const handleUpload = async (e)=>{

// const file = e.target.files[0]

// if(!file) return

// const fakeText = "Uploaded audio content detected"

// setText(fakeText)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message: fakeText }
// )

// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)

// }catch(err){
// console.log(err)
// }

// }



// return(

// <div className="voice-page">

// <div className="voice-card">

// <h1>🎤 Voice Scam Detection</h1>

// <p className="voice-sub">
// Analyze suspicious calls using AI voice detection
// </p>


// {/* BUTTONS */}

// <div className="voice-buttons">

// <button
// className="voice-btn"
// onClick={startRecording}
// >
// 🎙 Start Recording
// </button>

// <label className="upload-btn">

// 📂 Upload Audio

// <input
// type="file"
// accept="audio/*"
// onChange={handleUpload}
// hidden
// />

// </label>

// </div>


// {/* LISTENING STATUS */}

// {listening && (

// <div className="listening-box">

// <p className="listening-text">
// 🎧 Listening for suspicious voice patterns...
// </p>

// <div className="voice-wave">

// <div></div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>

// </div>

// </div>

// )}


// {/* DETECTED TEXT */}

// {text && (

// <div className="voice-text">

// <h4>Detected Text</h4>

// <p>{text}</p>

// </div>

// )}


// {/* RESULT */}

// {result && (

// <div className="result-card">

// <h2 className={result==="SCAM"?"danger":"safe"}>

// {result==="SCAM"
// ? "⚠ Scam Voice Detected"
// : "✅ Safe Voice"}

// </h2>

// <p><b>Prediction:</b> {prediction}</p>
// <p><b>Probability:</b> {probability}%</p>
// <p><b>Type:</b> {type}</p>


// {/* RISK METER */}

// <div className="risk-bar">

// <div
// className="risk-fill"
// style={{width:`${probability}%`}}
// ></div>

// </div>

// </div>

// )}

// </div>

// </div>

// )

// }

// export default VoiceDetection




















// import { useState } from "react"
// import axios from "axios"
// import "./voice.css"

// function VoiceDetection(){

// const [text,setText] = useState("")
// const [result,setResult] = useState("")
// const [prediction,setPrediction] = useState("")
// const [probability,setProbability] = useState(0)
// const [type,setType] = useState("")
// const [listening,setListening] = useState(false)



// // START RECORDING

// const startRecording = ()=>{

// const SpeechRecognition =
// window.SpeechRecognition || window.webkitSpeechRecognition

// if(!SpeechRecognition){
// alert("Speech recognition not supported in this browser")
// return
// }

// const recognition = new SpeechRecognition()

// recognition.lang = "en-US"
// recognition.start()

// setListening(true)

// recognition.onresult = async (event)=>{

// const voiceText = event.results[0][0].transcript

// setText(voiceText)
// setListening(false)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message: voiceText }
// )

// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)


// // SAVE HISTORY

// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({
// text: voiceText,
// prediction: res.data.prediction,
// probability: res.data.probability,
// type: res.data.type,
// module: "Voice Detection",
// time: new Date().toLocaleString()
// })

// localStorage.setItem("scamHistory", JSON.stringify(history))

// }catch(err){
// console.log(err)
// }

// }

// }



// // AUDIO FILE UPLOAD

// const handleUpload = async (e)=>{

// const file = e.target.files[0]

// if(!file) return

// // Demo voice text
// const fakeText = "Uploaded audio content detected"

// setText(fakeText)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message: fakeText }
// )

// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)


// // SAVE HISTORY

// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({
// text: fakeText,
// prediction: res.data.prediction,
// probability: res.data.probability,
// type: res.data.type,
// module: "Voice Detection",
// time: new Date().toLocaleString()
// })

// localStorage.setItem("scamHistory", JSON.stringify(history))

// }catch(err){
// console.log(err)
// }

// }



// return(

// <div className="voice-page">

// <div className="voice-card">

// <h1>🎤 Voice Scam Detection</h1>

// <p className="voice-sub">
// Analyze suspicious calls using AI voice detection
// </p>


// {/* BUTTONS */}

// <div className="voice-buttons">

// <button
// className="voice-btn"
// onClick={startRecording}
// >
// 🎙 Start Recording
// </button>

// <label className="upload-btn">

// 📂 Upload Audio

// <input
// type="file"
// accept="audio/*"
// onChange={handleUpload}
// hidden
// />

// </label>

// </div>


// {/* LISTENING ANIMATION */}

// {listening && (

// <div className="voice-wave">

// <div></div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>

// </div>

// )}


// {/* DETECTED TEXT */}

// {text && (

// <div className="voice-text">

// <h4>Detected Text</h4>

// <p>{text}</p>

// </div>

// )}


// {/* RESULT */}

// {result && (

// <div className="result-card">

// <h2 className={result==="SCAM"?"danger":"safe"}>

// {result==="SCAM"
// ? "⚠ Scam Voice Detected"
// : "✅ Safe Voice"}

// </h2>

// <p><b>Prediction:</b> {prediction}</p>

// <p><b>Probability:</b> {probability}%</p>

// <p><b>Type:</b> {type}</p>


// {/* RISK METER */}

// <div className="risk-bar">

// <div
// className="risk-fill"
// style={{width:`${probability}%`}}
// ></div>

// </div>

// </div>

// )}

// </div>

// </div>

// )

// }

// export default VoiceDetection














// import { useState } from "react"
// import axios from "axios"
// import "./voice.css"

// function VoiceDetection(){

// const [text,setText] = useState("")
// const [result,setResult] = useState("")
// const [prediction,setPrediction] = useState("")
// const [probability,setProbability] = useState(0)
// const [type,setType] = useState("")
// const [listening,setListening] = useState(false)


// // ================= START RECORDING =================

// const startRecording = ()=>{

// const SpeechRecognition =
// window.SpeechRecognition || window.webkitSpeechRecognition

// if(!SpeechRecognition){
// alert("Speech recognition not supported in this browser")
// return
// }

// const recognition = new SpeechRecognition()

// recognition.lang = "en-US"
// recognition.start()

// setListening(true)

// recognition.onresult = async (event)=>{

// const voiceText = event.results[0][0].transcript

// setText(voiceText)
// setListening(false)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message: voiceText }
// )

// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)


// // SAVE HISTORY

// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({
// text: voiceText,
// prediction: res.data.prediction,
// probability: res.data.probability,
// type: res.data.type,
// module: "Voice Detection",
// time: new Date().toLocaleString()
// })

// localStorage.setItem("scamHistory", JSON.stringify(history))

// }catch(err){
// console.log(err)
// }

// }

// }



// // ================= AUDIO FILE UPLOAD =================

// const handleUpload = async (e)=>{

// const file = e.target.files[0]

// if(!file) return

// const formData = new FormData()
// formData.append("audio", file)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/voice-scan",
// formData,
// {
// headers:{
// "Content-Type":"multipart/form-data"
// }
// }
// )

// setText(res.data.transcript)
// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)


// // SAVE HISTORY

// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({
// text: res.data.transcript,
// prediction: res.data.prediction,
// probability: res.data.probability,
// type: res.data.type,
// module: "Voice Detection",
// time: new Date().toLocaleString()
// })

// localStorage.setItem("scamHistory", JSON.stringify(history))

// }catch(err){
// console.log("Upload error:",err)
// }

// }



// return(

// <div className="voice-page">

// <div className="voice-card">

// <h1>🎤 Voice Scam Detection</h1>

// <p className="voice-sub">
// Analyze suspicious calls using AI voice detection
// </p>


// {/* BUTTONS */}

// <div className="voice-buttons">

// <button
// className="voice-btn"
// onClick={startRecording}
// >
// 🎙 Start Recording
// </button>


// <label className="upload-btn">

// 📂 Upload Audio

// <input
// type="file"
// accept=".mp3,.aac,.wav,.m4a,.ogg,.amr,.flac"
// onChange={handleUpload}
// hidden
// />

// </label>

// </div>


// {/* LISTENING STATUS */}

// {listening && (

// <div className="listening-box">

// <p className="listening-text">
// 🎧 Listening for suspicious voice patterns...
// </p>

// <div className="voice-wave">
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// </div>

// </div>

// )}


// {/* DETECTED TEXT */}

// {text && (

// <div className="voice-text">

// <h4>Detected Text</h4>
// <p>{text}</p>

// </div>

// )}


// {/* RESULT */}

// {result && (

// <div className="result-card">

// <h2 className={result==="SCAM"?"danger":"safe"}>

// {result==="SCAM"
// ? "⚠ Scam Voice Detected"
// : "✅ Safe Voice"}

// </h2>

// <p><b>Prediction:</b> {prediction}</p>
// <p><b>Probability:</b> {probability}%</p>
// <p><b>Type:</b> {type}</p>


// <div className="risk-bar">

// <div
// className="risk-fill"
// style={{width:`${probability}%`}}
// ></div>

// </div>

// </div>

// )}

// </div>

// </div>

// )

// }

// export default VoiceDetection
















// import { useState } from "react"
// import axios from "axios"
// import "./voice.css"

// function VoiceDetection(){

// const [text,setText] = useState("")
// const [result,setResult] = useState("")
// const [prediction,setPrediction] = useState("")
// const [probability,setProbability] = useState(0)
// const [type,setType] = useState("")
// const [listening,setListening] = useState(false)
// const [fileName,setFileName] = useState("")


// // ================= START RECORDING =================

// const startRecording = ()=>{

// const SpeechRecognition =
// window.SpeechRecognition || window.webkitSpeechRecognition

// if(!SpeechRecognition){
// alert("Speech recognition not supported in this browser")
// return
// }

// const recognition = new SpeechRecognition()

// recognition.lang = "en-US"
// recognition.start()

// setListening(true)

// recognition.onresult = async (event)=>{

// const voiceText = event.results[0][0].transcript

// setText(voiceText)
// setListening(false)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message: voiceText }
// )

// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)


// // SAVE HISTORY

// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({
// text: voiceText,
// prediction: res.data.prediction,
// probability: res.data.probability,
// type: res.data.type,
// module: "Voice Detection",
// time: new Date().toLocaleString()
// })

// localStorage.setItem("scamHistory", JSON.stringify(history))

// }catch(err){
// console.log(err)
// }

// }

// }



// // ================= AUDIO FILE UPLOAD =================

// const handleUpload = async (e)=>{

// const file = e.target.files[0]

// if(!file) return

// // SHOW FILE NAME
// setFileName(file.name)


// // TEMP TEXT (until speech-to-text backend exists)

// const fakeText = "Please provide your OTP to reactivate your account"

// setText(fakeText)

// try{

// const res = await axios.post(
// "http://localhost:5000/api/check",
// { message: fakeText }
// )

// setResult(res.data.prediction)
// setPrediction(res.data.prediction)
// setProbability(res.data.probability)
// setType(res.data.type)


// // SAVE HISTORY

// const history = JSON.parse(localStorage.getItem("scamHistory")) || []

// history.unshift({
// text: fakeText,
// prediction: res.data.prediction,
// probability: res.data.probability,
// type: res.data.type,
// module: "Voice Detection",
// time: new Date().toLocaleString()
// })

// localStorage.setItem("scamHistory", JSON.stringify(history))

// }catch(err){
// console.log(err)
// }

// }



// return(

// <div className="voice-page">

// <div className="voice-card">

// <h1>🎤 Voice Scam Detection</h1>

// <p className="voice-sub">
// Analyze suspicious calls using AI voice detection
// </p>


// {/* BUTTONS */}

// <div className="voice-buttons">

// <button
// className="voice-btn"
// onClick={startRecording}
// >
// 🎙 Start Recording
// </button>


// <label className="upload-btn">

// 📂 Upload Audio

// <input
// type="file"
// accept=".mp3,.aac,.wav,.m4a,.ogg,.amr,.flac"
// onChange={handleUpload}
// hidden
// />

// </label>

// </div>


// {/* SHOW SELECTED FILE */}

// {fileName && (
// <p className="file-name">
// 📂 Selected File: {fileName}
// </p>
// )}


// {/* LISTENING STATUS */}

// {listening && (

// <div className="listening-box">

// <p className="listening-text">
// 🎧 Listening for suspicious voice patterns...
// </p>

// <div className="voice-wave">
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// </div>

// </div>

// )}


// {/* DETECTED TEXT */}

// {text && (

// <div className="voice-text">

// <h4>Detected Text</h4>
// <p>{text}</p>

// </div>

// )}


// {/* RESULT */}

// {result && (

// <div className="result-card">

// <h2 className={result==="SCAM"?"danger":"safe"}>

// {result==="SCAM"
// ? "⚠ Scam Voice Detected"
// : "✅ Safe Voice"}

// </h2>

// <p><b>Prediction:</b> {prediction}</p>
// <p><b>Probability:</b> {probability}%</p>
// <p><b>Type:</b> {type}</p>


// <div className="risk-bar">

// <div
// className="risk-fill"
// style={{width:`${probability}%`}}
// ></div>

// </div>

// </div>

// )}

// </div>

// </div>

// )

// }

// export default VoiceDetection
















import { useState, useRef } from "react"
import axios from "axios"
import "./voice.css"

function VoiceDetection(){

const [text,setText] = useState("")
const [result,setResult] = useState("")
const [prediction,setPrediction] = useState("")
const [probability,setProbability] = useState(0)
const [type,setType] = useState("")
const [listening,setListening] = useState(false)
const [fileName,setFileName] = useState("")

// store recognition instance
const recognitionRef = useRef(null)



// ================= START RECORDING =================

const startRecording = ()=>{

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition

if(!SpeechRecognition){
alert("Speech recognition not supported in this browser")
return
}

const recognition = new SpeechRecognition()

recognition.lang = "en-US"
recognition.start()

recognitionRef.current = recognition

setListening(true)

recognition.onresult = async (event)=>{

const voiceText = event.results[0][0].transcript

setText(voiceText)
setListening(false)

try{

const res = await axios.post(
"http://localhost:5000/api/check",
{ message: voiceText }
)

setResult(res.data.prediction)
setPrediction(res.data.prediction)
setProbability(res.data.probability)
setType(res.data.type)


// SAVE HISTORY

const history = JSON.parse(localStorage.getItem("scamHistory")) || []

history.unshift({
text: voiceText,
prediction: res.data.prediction,
probability: res.data.probability,
type: res.data.type,
module: "Voice Detection",
time: new Date().toLocaleString()
})

localStorage.setItem("scamHistory", JSON.stringify(history))

}catch(err){
console.log(err)
}

}

}



// ================= STOP RECORDING =================

const stopRecording = ()=>{

if(recognitionRef.current){
recognitionRef.current.stop()
setListening(false)
}

}



// ================= AUDIO FILE UPLOAD =================

const handleUpload = async (e)=>{

const file = e.target.files[0]

if(!file) return

setFileName(file.name)

const fakeText = "Please provide your OTP to reactivate your account"

setText(fakeText)

try{

const res = await axios.post(
"http://localhost:5000/api/check",
{ message: fakeText }
)

setResult(res.data.prediction)
setPrediction(res.data.prediction)
setProbability(res.data.probability)
setType(res.data.type)

}catch(err){
console.log(err)
}

}



return(

<div className="voice-page">

<div className="voice-card">

<h1>🎤 Voice Scam Detection</h1>

<p className="voice-sub">
Analyze suspicious calls using AI voice detection
</p>


{/* BUTTONS */}

<div className="voice-buttons">

<button
className="voice-btn"
onClick={startRecording}
>
🎙 Start Recording
</button>


{listening && (

<button
className="stop-btn"
onClick={stopRecording}
>
⏹ Stop Recording
</button>

)}


<label className="upload-btn">

📂 Upload Audio

<input
type="file"
accept=".mp3,.aac,.wav,.m4a,.ogg,.amr,.flac"
onChange={handleUpload}
hidden
/>

</label>

</div>


{/* SHOW FILE */}

{fileName && (
<p className="file-name">
📂 Selected File: {fileName}
</p>
)}


{/* LISTENING STATUS */}

{listening && (

<div className="listening-box">

<p className="listening-text">
🎧 Listening for suspicious voice patterns...
</p>

<div className="voice-wave">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>

</div>

)}


{/* DETECTED TEXT */}

{text && (

<div className="voice-text">

<h4>Detected Text</h4>
<p>{text}</p>

</div>

)}


{/* RESULT */}

{result && (

<div className="result-card">

<h2 className={result==="SCAM"?"danger":"safe"}>

{result==="SCAM"
? "⚠ Scam Voice Detected"
: "✅ Safe Voice"}

</h2>

<p><b>Prediction:</b> {prediction}</p>
<p><b>Probability:</b> {probability}%</p>
<p><b>Type:</b> {type}</p>

<div className="risk-bar">

<div
className="risk-fill"
style={{width:`${probability}%`}}
></div>

</div>

</div>

)}

</div>

</div>

)

}

export default VoiceDetection




