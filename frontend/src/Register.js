import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert("Registration Successful!");

      navigate("/dashboard");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>📝 Register</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "300px",
            padding: "10px",
            margin: "10px",
          }}
        />

        <br />

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
          type="submit"
          style={{
            width: "320px",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;