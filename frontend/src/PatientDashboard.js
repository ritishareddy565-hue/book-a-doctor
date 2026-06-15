function PatientDashboard() {
  return (
    <div className="container mt-5">
      <h1>Patient Dashboard</h1>

      <div className="card p-3 mt-3">
        <h3>Welcome Patient</h3>
        <p>Book appointments and manage your profile.</p>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>My Appointments</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Doctors</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Profile</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;