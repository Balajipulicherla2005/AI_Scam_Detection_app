import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import {
  onAuthStateChanged
} from "firebase/auth";

import {
  auth
} from "./firebase";


// ================= NAVBAR =================

import Navbar from "./components/Navbar";


// ================= AUTH PAGES =================

import Login from "./pages/Login";

import Register from "./pages/Register";


// ================= LANDING PAGE =================

import Guide from "./pages/Guide";


// ================= DASHBOARD PAGES =================

import Dashboard from "./pages/Dashboard";

import ScamDetector from "./pages/ScamDetector";

import Chatbot from "./pages/Chatbot";

import URLScanner from "./pages/URLScanner";

import VoiceDetection from "./pages/VoiceDetection";

import History from "./pages/History";

import Examples from "./pages/Examples";



// =====================================================
// 🔒 PROTECTED ROUTE
// =====================================================

function ProtectedRoute({
  children
}) {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);



  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(

        auth,

        (currentUser) => {

          setUser(currentUser);

          setLoading(false);

        }

      );

    return () =>
      unsubscribe();

  }, []);



  // ================= LOADING =================

  if (loading) {

    return (

      <div
        style={{

          minHeight: "100vh",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          background: "#07142b",

          color: "white",

          fontSize: "24px",

          fontWeight: "600"

        }}
      >

        Loading...

      </div>

    );

  }



  // ================= AUTH CHECK =================

  return user

    ? children

    : <Navigate to="/login" />;

}



// =====================================================
// 🔥 APP CONTENT
// =====================================================

function AppContent() {

  const location =
    useLocation();



  // ================= SHOW NAVBAR =================

  const showDashboardNavbar =

    location.pathname === "/dashboard" ||

    location.pathname === "/detector" ||

    location.pathname === "/assistant" ||

    location.pathname === "/url-scanner" ||

    location.pathname === "/voice" ||

    location.pathname === "/history" ||

    location.pathname === "/examples";



  return (

    <>

      {/* ================= NAVBAR ================= */}

      {showDashboardNavbar &&
        <Navbar />
      }



      {/* ================= ROUTES ================= */}

      <Routes>

        {/* ================= LANDING PAGE ================= */}

        <Route
          path="/"
          element={<Guide />}
        />



        {/* ================= LOGIN ================= */}

        <Route
          path="/login"
          element={<Login />}
        />



        {/* ================= REGISTER ================= */}

        <Route
          path="/register"
          element={<Register />}
        />



        {/* ================= DASHBOARD ================= */}

        <Route
          path="/dashboard"
          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>

          }
        />



        {/* ================= SCAM DETECTOR ================= */}

        <Route
          path="/detector"
          element={

            <ProtectedRoute>

              <ScamDetector />

            </ProtectedRoute>

          }
        />



        {/* ================= AI ASSISTANT ================= */}

        <Route
          path="/assistant"
          element={

            <ProtectedRoute>

              <Chatbot />

            </ProtectedRoute>

          }
        />



        {/* ================= URL SCANNER ================= */}

        <Route
          path="/url-scanner"
          element={

            <ProtectedRoute>

              <URLScanner />

            </ProtectedRoute>

          }
        />



        {/* ================= VOICE DETECTION ================= */}

        <Route
          path="/voice"
          element={

            <ProtectedRoute>

              <VoiceDetection />

            </ProtectedRoute>

          }
        />



        {/* ================= HISTORY ================= */}

        <Route
          path="/history"
          element={

            <ProtectedRoute>

              <History />

            </ProtectedRoute>

          }
        />



        {/* ================= EXAMPLES ================= */}

        <Route
          path="/examples"
          element={

            <ProtectedRoute>

              <Examples />

            </ProtectedRoute>

          }
        />



        {/* ================= INVALID ROUTE ================= */}

        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />

      </Routes>

    </>

  );

}



// =====================================================
// 🚀 MAIN APP
// =====================================================

function App() {

  return (

    <BrowserRouter>

      <AppContent />

    </BrowserRouter>

  );

}

export default App;