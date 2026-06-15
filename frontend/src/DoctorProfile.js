import React from "react";
import { useNavigate } from "react-router-dom";

function DoctorProfile() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "25px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1>👨‍⚕️ Doctor Profile</h1>

        <img
          src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
          alt="Doctor"
          width="120"
        />

        <h2>Dr. Anitha</h2>

        <p>
          <strong>Specialization:</strong> Cardiologist
        </p>

        <p>
          <strong>Experience:</strong> 5 Years
        </p>

        <p>
          <strong>Consultation Fee:</strong> ₹500
        </p>

        <p>
          <strong>Hospital:</strong> Apollo Hospitals
        </p>

        <p>
          <strong>Rating:</strong> ⭐⭐⭐⭐⭐
        </p>

        <p>
          <strong>Available:</strong> Mon - Sat
        </p>

        <p>
          Experienced cardiologist specializing in heart disease diagnosis,
          treatment, and preventive care.
        </p>

        <button
          onClick={() => navigate("/book")}
          style={{
            background: "#28a745",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorProfile;