import React, { useState } from "react";
import axios from "axios";
import "./SignUpForm.css"; // Make sure this file exists

function SignUpForm({ setPage, setUser }) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", gender: "", age: "", weight: "" });

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/signup", formData);
      setUser(res.data.user);
      setPage("dashboard");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">SIGN UP</h1>
      <div className="input-group">
        <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <select onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="number" placeholder="Age" onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
        <input type="number" placeholder="Weight" onChange={(e) => setFormData({ ...formData, weight: e.target.value })} />
        <button className="black-mirror-button" onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUpForm;
