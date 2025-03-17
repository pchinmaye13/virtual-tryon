import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Dashboard from "./components/Dashboard";
import BackButton from "../components/BackButton";

import "./App.css";
import logo from "./assets/logo.png";// Import logo image

function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);

  return (
    <div className="app-container">
      {page === "home" && (
        <div className="home">
          <img src={logo} alt="TryOn Logo" className="logo" />
          <div className="top-right-buttons">
            <button onClick={() => setPage("login")}>Login</button>
            <button onClick={() => setPage("signup")}>Sign Up</button>
          </div>
        </div>
      )}
      {page === "login" && <LoginForm setPage={setPage} setUser={setUser} />}
      {page === "signup" && <SignUpForm setPage={setPage} setUser={setUser} />}
      {page === "dashboard" && <Dashboard user={user} />}
    </div>
  );
}

export default App;
