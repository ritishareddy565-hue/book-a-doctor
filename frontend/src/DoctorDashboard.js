import React, { useState } from "react";

function DoctorDashboard() {
  const [status, setStatus] = useState("Pending");

  return (
    <div style={{ padding: "30px" }}>
      <h1>👨‍⚕️ Doctor Dashboard</h1>

      <h2>Welcome Dr. Anitha</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ritisha</td>
            <td>20-06-2026</td>
            <td>{status}</td>

            <td>
              <button
                onClick={() => setStatus("Approved")}
                style={{
                  background: "green",
                  color: "white",
                  border: "none",
                  padding: "8px",
                  marginRight: "10px",
                }}
              >
                Approve
              </button>

              <button
                onClick={() => setStatus("Rejected")}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px",
                }}
              >
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DoctorDashboard;