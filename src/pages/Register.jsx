import "./auth.css";

import {
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signOut
} from "firebase/auth";

import {
  auth
} from "../firebase";

import {
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

function Register() {

  const navigate =
    useNavigate();

  // =========================
  // STATES
  // =========================

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword
  ] = useState("");

  const [
    showPassword,
    setShowPassword
  ] = useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword
  ] = useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");



  // =========================
  // REGISTER FUNCTION
  // =========================

  const handleRegister =
    async (e) => {

      e.preventDefault();

      setError("");

      setSuccess("");



      // PASSWORD MATCH CHECK

      if (
        password !==
        confirmPassword
      ) {

        return setError(
          "Passwords do not match"
        );
      }



      try {

        // =========================
        // CHECK DUPLICATE EMAIL
        // =========================

        const methods =
          await fetchSignInMethodsForEmail(
            auth,
            email
          );

        if (
          methods.length > 0
        ) {

          return setError(
            "Already used"
          );
        }



        // =========================
        // CREATE USER
        // =========================

        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );



        // =========================
        // LOGOUT AFTER REGISTER
        // =========================

        await signOut(auth);



        // =========================
        // SUCCESS MESSAGE
        // =========================

        setSuccess(
          "Registration successful! Please login."
        );



        // =========================
        // CLEAR INPUTS
        // =========================

        setName("");

        setEmail("");

        setPassword("");

        setConfirmPassword("");



        // =========================
        // REDIRECT TO LOGIN
        // =========================

        setTimeout(() => {

          navigate("/login");

        }, 2000);

      } catch (error) {

        // =========================
        // CLEAN ERROR MESSAGES
        // =========================

        if (
          error.code ===
          "auth/email-already-in-use"
        ) {

          setError(
            "Already used this Email address"
          );

        } else {

          setError(
            "Registration failed"
          );

        }

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



      {/* AUTH BOX */}

      <div className="auth-box">

        <h1>
          Create Account
        </h1>

        <form
          onSubmit={
            handleRegister
          }
        >

          {/* FULL NAME */}

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            required
          />



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



          {/* CONFIRM PASSWORD */}

          <div className="password-box">

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm Password"
              value={
                confirmPassword
              }
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              required
            />

            <span
              className="eye-icon"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >

              {showConfirmPassword
                ? <FaEyeSlash />
                : <FaEye />}

            </span>

          </div>



          {/* REGISTER BUTTON */}

          <button
            type="submit"
            className="login-btn"
          >
            Register
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



        {/* LOGIN LINK */}

        <p className="auth-link">

          Already have account?

          <Link to="/login">

            Login

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;