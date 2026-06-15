import React from "react";

function AdminDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>⚙️ Admin Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
          }}
        >
          <h3>👨‍⚕️ Doctors</h3>
          <h2>10</h2>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
          }}
        >
          <h3>🧑 Patients</h3>
          <h2>50</h2>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
          }}
        >
          <h3>📅 Appointments</h3>
          <h2>120</h2>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;