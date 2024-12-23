import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential); // You can remove this line in production
        navigate("/"); // Navigate to the home page after successful signup
      })
      .catch((error) => {
        console.log(error.message); // Log error message if signup fails
      });
  };

  const goToSignIn = () => {
    navigate("/signin"); // Navigate to the sign-in page
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp} className="form">
        <h1>Create Account</h1>
        <div className="input-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      {/* Button to navigate to the Sign In page */}
      <div className="signup-link">
      <button onClick={goToSignIn}>
        Already have an account? Sign In
      </button>
      </div>
    </div>
  );
};

export default SignUp;
