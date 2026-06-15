import React from "react";

function Profile() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2 className="mb-4">👤 Patient Profile</h2>

        <div className="row">

          <div className="col-md-6">
            <p><strong>Name:</strong> Ritisha</p>
            <p><strong>Email:</strong> ritisha@gmail.com</p>
            <p><strong>Phone:</strong> 9876543210</p>
          </div>

          <div className="col-md-6">
            <p><strong>Age:</strong> 20</p>
            <p><strong>Gender:</strong> Female</p>
            <p><strong>Blood Group:</strong> O+</p>
          </div>

        </div>

        <button className="btn btn-primary mt-3">
          Edit Profile
        </button>

      </div>
    </div>
  );
}

export default Profile;