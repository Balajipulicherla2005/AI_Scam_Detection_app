import {
  NavLink,
  useNavigate
} from "react-router-dom";

import {
  signOut
} from "firebase/auth";

import {
  auth
} from "../firebase";

import {
  FaUserCircle
} from "react-icons/fa";

import "./navbar.css";

function Navbar() {

  const navigate =
    useNavigate();

  // ===== CURRENT USER =====

  const user =
    auth.currentUser;

  const userName =
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "User";

  const userEmail =
    user?.email || "";



  // ===== LOGOUT FUNCTION =====

  const handleLogout =
    async () => {

      try {

        await signOut(auth);

        navigate("/login");

      } catch (error) {

        console.log(error);

      }

    };



  return (

    <nav className="navbar">

      {/* ===== LOGO ===== */}

      <div className="logo">

        🛡 AI Scam detection

      </div>




      {/* ===== NAVIGATION LINKS ===== */}

      <div className="nav-links">

        <NavLink
          to="/dashboard"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/detector"
        >
          Check Message
        </NavLink>

        <NavLink
          to="/assistant"
        >
          AI Assistant
        </NavLink>

        <NavLink
          to="/url-scanner"
        >
          Check Link
        </NavLink>

        <NavLink
          to="/voice"
        >
          Check Voice
        </NavLink>

        <NavLink
          to="/history"
        >
          History
        </NavLink>

      </div>




      {/* ===== RIGHT SECTION ===== */}

      <div className="navbar-right">

        {/* ===== USER PROFILE ===== */}

        <div className="user-profile">

          <div className="user-icon">

            <FaUserCircle />

          </div>

          <div className="user-info">

            <h4>
              {userName}
            </h4>

            <p>
              {userEmail}
            </p>

          </div>

        </div>




        {/* ===== LOGOUT BUTTON ===== */}

        <button
          className="logout-btn"
          onClick={handleLogout}
        >

          Logout

        </button>

      </div>

    </nav>

  );

}

export default Navbar;