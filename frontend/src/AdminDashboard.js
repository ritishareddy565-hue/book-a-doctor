import React from "react";

function AdminDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>⚙️ Admin Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h2>👨‍⚕️ Doctors</h2>
          <h1>25</h1>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h2>🧑 Patients</h2>
          <h1>120</h1>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h2>📅 Appointments</h2>
          <h1>340</h1>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h2>💰 Revenue</h2>
          <h1>₹50,000</h1>
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
        <h2>Recent Activities</h2>

        <p>✅ New Doctor Added</p>
        <p>✅ Appointment Approved</p>
        <p>✅ Patient Registered</p>
      </div>
    </div>
  );
}

export default AdminDashboard;