import React from "react";

function Register() {
  return (
    <div style={{ width: "350px", margin: "50px auto" }}>
      <h2>📝 Register Page</h2>

      <input
        type="text"
        placeholder="Full Name"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="email"
        placeholder="Email"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button
        style={{
          width: "100%",
          padding: "10px",
          background: "blue",
          color: "white",
          border: "none",
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Register;