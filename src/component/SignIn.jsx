import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

function SignIn() {
  const handleSignIn = (e) => {
    e.preventDefault();
    alert("Sign In — Under Update");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="auth-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
