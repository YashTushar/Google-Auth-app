import React from "react";
import "../style/LoginPage.css"; // Import CSS for LoginPage

const LoginPage = ({ handleLogin }) => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome to My App</h1>
        <p>Sign in to continue</p>
        <button className="login-btn" onClick={handleLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
