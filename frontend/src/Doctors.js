import React from "react";

function Doctors() {
  const doctors = [
    {
      name: "Dr. Anitha",
      specialization: "Cardiologist",
      experience: "5 Years",
      fee: 500,
    },
    {
      name: "Dr. Ravi",
      specialization: "Dermatologist",
      experience: "8 Years",
      fee: 700,
    },
    {
      name: "Dr. Priya",
      specialization: "Neurologist",
      experience: "10 Years",
      fee: 1000,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>👨‍⚕️ Doctors List</h1>

      {doctors.map((doctor, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{doctor.name}</h3>
          <p>Specialization: {doctor.specialization}</p>
          <p>Experience: {doctor.experience}</p>
          <p>Consultation Fee: ₹{doctor.fee}</p>

          <button
            style={{
              background: "green",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  );
}

export default Doctors;