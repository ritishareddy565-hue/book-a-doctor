import React from "react";
import { useNavigate } from "react-router-dom";

function DoctorProfile() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <div className="text-center">
          <h1>👨‍⚕️ Dr. Anitha</h1>
          <h4>Cardiologist</h4>
          <p>⭐⭐⭐⭐⭐ (4.9 Rating)</p>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-6">
            <p><strong>Hospital:</strong> Apollo Hospitals</p>
            <p><strong>Experience:</strong> 5 Years</p>
            <p><strong>Qualification:</strong> MBBS, MD</p>
          </div>

          <div className="col-md-6">
            <p><strong>Location:</strong> Hyderabad</p>
            <p><strong>Consultation Fee:</strong> ₹500</p>
            <p><strong>Available:</strong> Mon - Sat</p>
          </div>
        </div>

        <hr />

        <h4>About Doctor</h4>

        <p>
          Experienced Cardiologist specializing in
          heart disease diagnosis, ECG analysis,
          hypertension management and preventive care.
        </p>

        <h4>Available Time</h4>

        <p>10:00 AM - 5:00 PM</p>

        <button
          className="btn btn-success"
          onClick={() => navigate("/book")}
        >
          📅 Book Appointment
        </button>

      </div>
    </div>
  );
}

export default DoctorProfile;