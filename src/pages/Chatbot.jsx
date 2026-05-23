import { useState } from "react";

import axios from "axios";

import { auth } from "../firebase";

import "../pages/ui.css";

function Chatbot() {

  // ================= STATES =================

  const [chat, setChat] =
    useState("");

  const [reply, setReply] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [language, setLanguage] =
    useState("en-IN");

  const [audio, setAudio] =
    useState(null);




  // ================= 🔊 SPEAK FUNCTION =================

  const speak = async (text) => {

    try {

      const cleanText =
        text.replace(/\d+\.\s*/g, "");

      // STOP OLD AUDIO

      if (audio) {

        audio.pause();

      }

      const res = await fetch(

        "http://localhost:5000/api/speak",

        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json"

          },

          body: JSON.stringify({

            text: cleanText,

            language:
              language.split("-")[0]

          })

        }

      );

      const blob =
        await res.blob();

      const audioUrl =
        URL.createObjectURL(blob);

      const newAudio =
        new Audio(audioUrl);

      newAudio.volume = 1;

      setAudio(newAudio);

      await newAudio.play();

    } catch (err) {

      console.log(
        "Voice Error:",
        err
      );

    }

  };




  // ================= ⏸ STOP =================

  const stopVoice = () => {

    if (audio) {

      audio.pause();

    }

  };




  // ================= ▶ RESUME =================

  const resumeVoice = () => {

    if (audio) {

      audio.play();

    }

  };




  // ================= 🔁 RESTART =================

  const restartVoice = () => {

    if (audio) {

      audio.currentTime = 0;

      audio.play();

    }

  };




  // ================= 🌐 LANGUAGE MAP =================

  const getLanguageName = (code) => {

    const map = {

      "hi-IN": "Hindi",
      "te-IN": "Telugu",
      "ta-IN": "Tamil",
      "kn-IN": "Kannada",
      "ml-IN": "Malayalam",
      "bn-IN": "Bengali",
      "mr-IN": "Marathi",
      "gu-IN": "Gujarati",
      "pa-IN": "Punjabi"

    };

    return map[code] || "English";

  };




  // ================= 🚀 ASK AI =================

  const askAI = async () => {

    if (!chat.trim()) return;

    setLoading(true);

    try {

      // ================= AI REQUEST =================

      const res = await axios.post(

        "http://localhost:5000/api/ask-ai",

        {

          message: chat

        }

      );

      let aiReply =
        res.data.reply;





      // ================= TRANSLATE =================

      if (language !== "en-IN") {

        const translateRes =
          await axios.post(

            "http://localhost:5000/api/ask-ai",

            {

              message:
                `Translate this into ${getLanguageName(language)}:\n${aiReply}`

            }

          );

        aiReply =
          translateRes.data.reply;

      }





      // ================= SHOW RESPONSE =================

      setReply(aiReply);





      // ================= SPEAK RESPONSE =================

      speak(aiReply);





      // ================= SAVE HISTORY =================

      const userEmail =
        auth.currentUser?.email;

      const historyKey =
        `scamHistory_${userEmail}`;

      const history =
        JSON.parse(

          localStorage.getItem(historyKey)

        ) || [];

      history.unshift({

        module: "AI Assistant",

        text: chat,

        prediction: aiReply.includes("scam")
          ? "SCAM"
          : "SAFE",

        probability:
          aiReply.includes("scam")
            ? 85
            : 15,

        type: aiReply,

        time:
          new Date().toLocaleString()

      });

      localStorage.setItem(

        historyKey,

        JSON.stringify(history)

      );

    } catch (err) {

      console.error(err);

      setReply(
        "⚠️ AI server error"
      );

    }

    setLoading(false);

  };




  // ================= UI =================

  return (

    <div className="page-container">

      {/* ===== PAGE HEADER ===== */}

      <h1 className="page-title">
        🤖 AI Scam Assistant
      </h1>

      <p className="page-subtitle">

        Ask AI questions about scams,
        phishing messages, fraud websites,
        suspicious links, and online threats
        with real-time intelligent analysis.

      </p>





      {/* ===== MAIN LAYOUT ===== */}

      <div className="chatbot-container">

        <div className="chat-layout">




          {/* ================= CHAT CARD ================= */}

          <div className="chat-card">

            <textarea

              placeholder="Ask something like: Is this message a scam?"

              value={chat}

              onChange={(e) =>
                setChat(e.target.value)
              }

              className="chat-input"

            />





            {/* ================= LANGUAGE ================= */}

            <div className="chat-controls">

              <select

                value={language}

                onChange={(e) =>
                  setLanguage(e.target.value)
                }

                className="lang-select"

              >

                <option value="en-IN">
                  English
                </option>

                <option value="hi-IN">
                  Hindi
                </option>

                <option value="te-IN">
                  Telugu
                </option>

                <option value="ta-IN">
                  Tamil
                </option>

                <option value="kn-IN">
                  Kannada
                </option>

                <option value="ml-IN">
                  Malayalam
                </option>

                <option value="bn-IN">
                  Bengali
                </option>

                <option value="mr-IN">
                  Marathi
                </option>

                <option value="gu-IN">
                  Gujarati
                </option>

                <option value="pa-IN">
                  Punjabi
                </option>

              </select>





              {/* ================= ASK BUTTON ================= */}

              <button

                className="ask-btn"

                onClick={askAI}

              >

                {loading
                  ? "Thinking..."
                  : "Ask AI"}

              </button>

            </div>





            {/* ================= VOICE CONTROLS ================= */}

            {reply && (

              <div className="voice-controls">




                {/* STOP */}

                <button

                  className="stop-btn"

                  onClick={stopVoice}

                >

                  ⏸ Stop

                </button>





                {/* RESUME */}

                <button

                  className="resume-btn"

                  onClick={resumeVoice}

                >

                  ▶ Resume

                </button>





                {/* RESTART */}

                <button

                  className="restart-btn"

                  onClick={restartVoice}

                >

                  🔁 Restart

                </button>

              </div>

            )}

          </div>




          {/* ================= RESPONSE CARD ================= */}

          {reply && (

            <div className="response-card">

              <h3>
                🧠 AI Response
              </h3>

              <p>
                {reply}
              </p>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default Chatbot;