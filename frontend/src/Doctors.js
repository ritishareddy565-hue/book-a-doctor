import React, { useState } from "react";
import { Link } from "react-router-dom";

function Doctors() {
  const [search, setSearch] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Anitha",
      specialization: "Cardiologist",
      experience: "5 Years",
      fee: "₹500",
      hospital: "Apollo Hospitals",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "Dr. Ravi",
      specialization: "Dermatologist",
      experience: "8 Years",
      fee: "₹700",
      hospital: "Yashoda Hospitals",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "Dr. Priya",
      specialization: "Neurologist",
      experience: "10 Years",
      fee: "₹1000",
      hospital: "Care Hospitals",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        👨‍⚕️ Find Your Doctor
      </h1>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="🔍 Search by doctor name or specialization..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredDoctors.map((doctor) => (
          <div className="col-md-4 mb-4" key={doctor.id}>
            <div className="card shadow h-100">
              <div className="card-body">

                <h4>{doctor.name}</h4>

                <p>
                  <strong>Specialization:</strong>{" "}
                  {doctor.specialization}
                </p>

                <p>
                  <strong>Experience:</strong>{" "}
                  {doctor.experience}
                </p>

                <p>
                  <strong>Hospital:</strong>{" "}
                  {doctor.hospital}
                </p>

                <p>
                  <strong>Consultation Fee:</strong>{" "}
                  {doctor.fee}
                </p>

                <p>
                  <strong>Rating:</strong>{" "}
                  {doctor.rating}
                </p>

                <Link
                  to="/doctor-profile"
                  className="btn btn-primary me-2"
                >
                  View Profile
                </Link>

                <Link
                  to="/book"
                  className="btn btn-success"
                >
                  Book Now
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;