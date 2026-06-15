import React from "react";

function MyAppointments() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">📋 My Appointments</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dr. Anitha</td>
            <td>20-06-2026</td>
            <td>10:00 AM</td>
            <td>
              <span className="badge bg-warning">
                Pending
              </span>
            </td>
          </tr>

          <tr>
            <td>Dr. Ravi</td>
            <td>25-06-2026</td>
            <td>11:00 AM</td>
            <td>
              <span className="badge bg-success">
                Approved
              </span>
            </td>
          </tr>

          <tr>
            <td>Dr. Priya</td>
            <td>30-06-2026</td>
            <td>02:00 PM</td>
            <td>
              <span className="badge bg-danger">
                Rejected
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyAppointments;