import React from "react";
import "../style/WelcomePage.css"; // Import CSS for WelcomePage

const WelcomePage = ({ user, handleLogout }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <img src={user.photoURL} alt="User Avatar" className="avatar" />
        <h2>Welcome, {user.displayName}!</h2>
        <p>Email: {user.email}</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
