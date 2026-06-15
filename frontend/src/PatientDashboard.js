import React from "react";
import { Link } from "react-router-dom";

function PatientDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🏥 Patient Dashboard</h1>

      <h2>Welcome Ritisha 👋</h2>

      <p>Book appointments and manage your healthcare easily.</p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
          }}
        >
          <h3>👨‍⚕️ Doctors</h3>
          <p>Browse available doctors.</p>

          <Link to="/doctors">
            <button>View Doctors</button>
          </Link>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
          }}
        >
          <h3>📅 Appointments</h3>
          <p>Check your appointments.</p>

          <Link to="/appointments">
            <button>My Appointments</button>
          </Link>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
          }}
        >
          <h3>👤 Profile</h3>
          <p>Manage your profile.</p>

          <Link to="/profile">
            <button>Profile</button>
          </Link>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Recent Appointment</h2>

        <p>
          <strong>Doctor:</strong> Dr. Anitha
        </p>

        <p>
          <strong>Date:</strong> 20-06-2026
        </p>

        <p>
          <strong>Status:</strong> Pending
        </p>
      </div>
    </div>
  );
}

export default PatientDashboard;