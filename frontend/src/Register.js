import React from "react";

function Register() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>📝 Register</h1>

      <input
        type="text"
        placeholder="Full Name"
        style={{ width: "300px", padding: "10px", margin: "10px" }}
      />
      <br />

      <input
        type="email"
        placeholder="Email"
        style={{ width: "300px", padding: "10px", margin: "10px" }}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        style={{ width: "300px", padding: "10px", margin: "10px" }}
      />
      <br />

      <button
        style={{
          background: "green",
          color: "white",
          padding: "10px 20px",
          border: "none",
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Register;