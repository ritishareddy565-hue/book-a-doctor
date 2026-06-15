import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        background: "#007bff",
        padding: "15px",
      }}
    >
      <Link
        to="/"
        style={{ color: "white", marginRight: "15px" }}
      >
        Home
      </Link>

      <Link
        to="/login"
        style={{ color: "white", marginRight: "15px" }}
      >
        Login
      </Link>

      <Link
        to="/register"
        style={{ color: "white", marginRight: "15px" }}
      >
        Register
      </Link>

      <Link
        to="/doctors"
        style={{ color: "white", marginRight: "15px" }}
      >
        Doctors
      </Link>

      <Link
        to="/doctor-profile"
        style={{ color: "white", marginRight: "15px" }}
      >
        Doctor Profile
      </Link>

      <Link
        to="/book"
        style={{ color: "white", marginRight: "15px" }}
      >
        Book Appointment
      </Link>

      <Link
        to="/appointments"
        style={{ color: "white", marginRight: "15px" }}
      >
        Appointments
      </Link>

      <Link
        to="/doctor-dashboard"
        style={{ color: "white", marginRight: "15px" }}
      >
        Doctor Dashboard
      </Link>

      <Link
        to="/profile"
        style={{ color: "white" }}
      >
        Profile
      </Link>
    </div>
  );
}

export default Navbar;