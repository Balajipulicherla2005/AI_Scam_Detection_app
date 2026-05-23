import "./auth.css";

import {
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

import {
  auth,
  provider
} from "../firebase";

import {
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import googleIcon from "../assets/google.png";

function Login() {

  const navigate =
    useNavigate();



  // =========================
  // STATES
  // =========================

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [
    showPassword,
    setShowPassword
  ] = useState(false);

  const [error, setError] =
    useState("");

  const [
    success,
    setSuccess
  ] = useState("");



  // =========================
  // GOOGLE LOGIN
  // =========================

  const googleLogin =
    async () => {

      setError("");

      setSuccess("");

      try {

        await signInWithPopup(
          auth,
          provider
        );

        setSuccess(
          "Login successful!"
        );

        setTimeout(() => {

          navigate(
            "/dashboard"
          );

        }, 1000);

      } catch (error) {

        setError(
          "Google login failed"
        );
      }
    };



  // =========================
  // EMAIL LOGIN
  // =========================

  const handleLogin =
    async (e) => {

      e.preventDefault();

      setError("");

      setSuccess("");

      try {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        setSuccess(
          "Login successful!"
        );

        setTimeout(() => {

          navigate(
            "/dashboard"
          );

        }, 1000);

      } catch (error) {

        setError(
          "Invalid email or password"
        );
      }
    };



  // =========================
  // FORGOT PASSWORD
  // =========================

  const forgotPassword =
    async () => {

      setError("");

      setSuccess("");



      if (!email) {

        return setError(
          "Enter your email first"
        );
      }



      try {

        await sendPasswordResetEmail(
          auth,
          email
        );

        setSuccess(
          "Password reset email sent successfully! Check your Gmail inbox."
        );

      } catch (error) {

        setError(
          "Failed to send reset email"
        );
      }
    };



  return (

    <div className="auth-container">

      {/* BACK BUTTON */}

      <button
        className="back-home-btn"
        onClick={() =>
          navigate("/")
        }
      >
        ← Back
      </button>



      {/* LOGIN BOX */}

      <div className="auth-box">

        <h1>
          AI Scam Detection
        </h1>

        <p>
          Stay safe from scams
        </p>



        {/* GOOGLE LOGIN BUTTON */}

        <button
          className="google-btn"
          onClick={googleLogin}
        >

          <img
            src={googleIcon}
            alt="Google"
            className="google-icon"
          />

          <span>
            Continue with Google
          </span>

        </button>



        {/* DIVIDER */}

        <div className="divider">
          OR
        </div>



        {/* LOGIN FORM */}

        <form
          onSubmit={handleLogin}
        >

          {/* EMAIL */}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            required
          />



          {/* PASSWORD */}

          <div className="password-box">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              required
            />

            <span
              className="eye-icon"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >

              {showPassword
                ? <FaEyeSlash />
                : <FaEye />}

            </span>

          </div>



          {/* FORGOT PASSWORD */}

          <div
            className="forgot-password"
            onClick={
              forgotPassword
            }
          >
            Forgot password?
          </div>



          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>



        {/* ERROR MESSAGE */}

        {error && (

          <p className="error-text">
            {error}
          </p>

        )}



        {/* SUCCESS MESSAGE */}

        {success && (

          <p className="success-text">
            {success}
          </p>

        )}



        {/* REGISTER LINK */}

        <p className="auth-link">

          Don't have account?

          <Link to="/register">

            Register

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;