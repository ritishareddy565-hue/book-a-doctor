import React from "react";

function DoctorDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>👨‍⚕️ Doctor Dashboard</h1>

      <h3>Welcome Dr. Anitha</h3>

      <table border="1" cellPadding="10">
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
            <td>Pending</td>

            <td>
              <button>Approve</button>

              <button
                style={{
                  marginLeft: "10px",
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