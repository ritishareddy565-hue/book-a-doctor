import React from "react";

function PatientDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🏥 Patient Dashboard</h1>

      <h3>Welcome Ritisha</h3>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>My Appointments</h2>

        <p>Doctor: Anitha</p>
        <p>Date: 20-06-2026</p>
        <p>Status: Pending</p>
      </div>
    </div>
  );
}

export default PatientDashboard;