import React from "react";

function Login() {
  return (
    <div style={{ width: "350px", margin: "50px auto" }}>
      <h2>🔐 Login Page</h2>

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
          background: "green",
          color: "white",
          border: "none",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;