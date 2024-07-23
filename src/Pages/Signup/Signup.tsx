import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-layout">
      <div className="signup-form-card">
        <h2>Sign Up</h2>
        <form action="#">
          <label>Username</label>
          <div>
            <input type="text" />
          </div>
          <br />
          <label>Password</label>
          <div>
            <input type="password" />
          </div>
        </form>
        <br />
        <button className="signup-button">Sign Up</button>
        <br />
        <p>
          Already have account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
