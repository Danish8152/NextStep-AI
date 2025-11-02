import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

function SignUp() {
  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Sign Up — Under Update");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSignUp}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/signin" className="auth-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
