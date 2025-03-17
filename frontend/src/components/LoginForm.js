import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css"; // Make sure this file exists

function LoginForm({ setPage, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      setUser(res.data.user);
      setPage("dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN</h1>
      <div className="input-group">
        <input type="email" placeholder="Username (Email)" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="black-mirror-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginForm;

