import React from "react";
import { Link } from "react-router-dom";

function PatientDashboard() {
  return (
    <div className="container mt-5">
      <h1>🏥 Welcome Ritisha 👋</h1>
      <p>Manage your appointments and healthcare services.</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h3>📅</h3>
            <h4>3</h4>
            <p>Appointments</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h3>👨‍⚕️</h3>
            <h4>25</h4>
            <p>Doctors</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h3>👤</h3>
            <h4>100%</h4>
            <p>Profile Complete</p>
          </div>
        </div>
      </div>

      <div className="card shadow p-4 mt-4">
        <h3>Upcoming Appointment</h3>
        <p><strong>Doctor:</strong> Dr. Anitha</p>
        <p><strong>Date:</strong> 20-06-2026</p>
        <p><strong>Time:</strong> 10:00 AM</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="badge bg-warning">
            Pending
          </span>
        </p>
      </div>

      <div className="mt-4">
        <h3>Quick Actions</h3>

        <Link to="/book" className="btn btn-success me-2">
          📅 Book Appointment
        </Link>

        <Link to="/doctors" className="btn btn-primary me-2">
          👨‍⚕️ View Doctors
        </Link>

        <Link to="/appointments" className="btn btn-info">
          📋 My Appointments
        </Link>
      </div>
    </div>
  );
}

export default PatientDashboard;