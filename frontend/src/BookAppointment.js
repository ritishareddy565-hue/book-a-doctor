import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookAppointment() {
  const navigate = useNavigate();

  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!doctorName || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    alert("Appointment Booked Successfully!");

    navigate("/appointments");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">
          📅 Book Appointment
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Select Doctor
            </label>

            <select
              className="form-control"
              value={doctorName}
              onChange={(e) =>
                setDoctorName(e.target.value)
              }
            >
              <option value="">Choose Doctor</option>
              <option>Dr. Anitha</option>
              <option>Dr. Ravi</option>
              <option>Dr. Priya</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Appointment Date
            </label>

            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Appointment Time
            </label>

            <input
              type="time"
              className="form-control"
              value={time}
              onChange={(e) =>
                setTime(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Confirm Appointment
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
           