import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#007bff",
        padding: "15px",
      }}
    >
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        Home
      </Link>

      <Link to="/login" style={{ color: "white", marginRight: "15px" }}>
        Login
      </Link>

      <Link to="/register" style={{ color: "white", marginRight: "15px" }}>
        Register
      </Link>

      <Link to="/dashboard" style={{ color: "white", marginRight: "15px" }}>
        Dashboard
      </Link>

      <Link to="/doctors" style={{ color: "white", marginRight: "15px" }}>
        Doctors
      </Link>

      <Link to="/appointments" style={{ color: "white", marginRight: "15px" }}>
        Appointments
      </Link>

      <Link to="/profile" style={{ color: "white" }}>
        Profile
      </Link>
    </nav>
  );
}

export default Navbar;