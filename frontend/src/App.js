import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Doctors from "./Doctors";
import DoctorProfile from "./DoctorProfile";
import BookAppointment from "./BookAppointment";
import MyAppointments from "./MyAppointments";
import Profile from "./Profile";
import PatientDashboard from "./PatientDashboard";
import DoctorDashboard from "./DoctorDashboard";
import AdminDashboard from "./AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<PatientDashboard />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route
          path="/doctor-profile"
          element={<DoctorProfile />}
        />

        <Route
          path="/book"
          element={<BookAppointment />}
        />

        <Route
          path="/appointments"
          element={<MyAppointments />}
        />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="/doctor-dashboard"
          element={<DoctorDashboard />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;