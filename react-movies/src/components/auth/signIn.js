import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./SignIn.css"; // Import the CSS file

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const signIn = (e) => {
    e.preventDefault();

    // Firebase authentication logic
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential); // You can remove this line in production
        navigate("/"); // Navigate to the home page ("/") after successful login
      })
      .catch((error) => {
        console.log(error.message); // Log error message if login fails
      });
  };

  const goToSignUp = () => {
    navigate("/signup"); // Navigate to the signup page
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn} className="form">
        <h1>Log In to your Account</h1>

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

        <button type="submit" className="submit-btn">Log In</button>
        
        <div className="signup-link">
          <button type="button" onClick={goToSignUp}>Don't have an account? Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
