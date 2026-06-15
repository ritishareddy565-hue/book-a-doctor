import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🔐 Login Page</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          margin: "10px",
        }}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          margin: "10px",
        }}
      />

      <br />

      <button
        onClick={handleLogin}
        style={{
          background: "green",
          color: "white",
          padding: "10px 20px",
          border: "none",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;