import React from "react";
import "./Dashboard.css"; // Make sure this file exists

function Dashboard({ setPage }) {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Virtual Try-On</h1>
      <div className="dashboard-buttons">
        <button className="black-mirror-button" onClick={() => setPage("upload")}>
          Upload Image
        </button>
        <button className="black-mirror-button" onClick={() => setPage("tryon")}>
          Try On Clothes
        </button>
        <button className="black-mirror-button logout" onClick={() => setPage("home")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
