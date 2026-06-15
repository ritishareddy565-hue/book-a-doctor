import React from "react";

function MyAppointments() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>📋 My Appointments</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dr. Anitha</td>
            <td>20-06-2026</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyAppointments;