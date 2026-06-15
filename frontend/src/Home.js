import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>🏥 Book A Doctor</h1>

      <h2>Find & Book Trusted Doctors Online</h2>

      <p>
        Book appointments with experienced doctors anytime,
        anywhere.
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/doctors">
          <button
            style={{
              padding: "12px 20px",
              marginRight: "10px",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Find Doctors
          </button>
        </Link>

        <Link to="/book">
          <button
            style={{
              padding: "12px 20px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Book Appointment
          </button>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <h2>👨‍⚕️ 100+</h2>
          <p>Doctors</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <h2>🧑 500+</h2>
          <p>Patients</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <h2>📅 300+</h2>
          <p>Appointments</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <h2>⭐ 4.8</h2>
          <p>Rating</p>
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>Why Choose Us?</h2>

        <p>✔ Verified Doctors</p>
        <p>✔ Easy Appointment Booking</p>
        <p>✔ Secure Healthcare Platform</p>
        <p>✔ Fast & Reliable Service</p>
      </div>
    </div>
  );
}

export default Home;