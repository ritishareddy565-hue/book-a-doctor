import React from "react";

function Home() {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>🏥 Book a Doctor</h1>

      <h2>Healthcare Appointment Booking System</h2>

      <p>
        Find experienced doctors and book appointments online.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        <div>
          <h2>👨‍⚕️ 100+</h2>
          <p>Doctors</p>
        </div>

        <div>
          <h2>🧑 500+</h2>
          <p>Patients</p>
        </div>

        <div>
          <h2>📅 300+</h2>
          <p>Appointments</p>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Why Choose Us?</h2>

        <p>✔ Easy Appointment Booking</p>
        <p>✔ Verified Doctors</p>
        <p>✔ Secure Healthcare Platform</p>
        <p>✔ Fast & Reliable Service</p>
      </div>
    </div>
  );
}

export default Home;