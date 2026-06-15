import React from "react";

function BookAppointment() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>📅 Book Appointment</h1>

      <form style={{ maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Patient Name"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="text"
          placeholder="Doctor Name"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="date"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <button
          type="submit"
          style={{
            background: "#007bff",
            color: "white",
            padding: "10px 20px",
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
    
           