import React from "react";
import "./MainNav.css";
import { useNavigate } from "react-router-dom";

const MainNav = () => {
  const test = false;
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      {test ? (
        <div>MainNav</div>
      ) : (
        <button className="login-btn" onClick={() => handleLogin()}>
          Login
        </button>
      )}
    </div>
  );
};

export default MainNav;
