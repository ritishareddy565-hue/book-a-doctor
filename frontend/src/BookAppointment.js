import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookAppointment() {
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("Dr. Anitha");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appointment Booked Successfully!");

    navigate("/appointments");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📅 Book Appointment</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
        }}
      >
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          value={doctorName}
          readOnly
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <button
          type="submit"
          style={{
            background: "green",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;
    
           