function DoctorDashboard() {
  return (
    <div className="container mt-5">
      <h1>Doctor Dashboard</h1>

      <div className="card p-3 mt-3">
        <h3>Welcome Doctor</h3>
        <p>Manage appointments and profile.</p>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Pending Appointments</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Approved Appointments</h5>
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

export default DoctorDashboard;