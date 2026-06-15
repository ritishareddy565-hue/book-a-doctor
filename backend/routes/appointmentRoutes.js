const express = require("express");
const Appointment = require("../models/Appointment");

console.log("Appointment Model:", Appointment);

const router = express.Router();

console.log("APPOINTMENT ROUTES LOADED");

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();

    res.json(appointments);
  } catch (error) {
    console.log("GET ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// Book appointment
router.post("/book", async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);

    res.status(201).json({
      message: "Appointment Booked Successfully",
      appointment,
    });
  } catch (error) {
    console.log("APPOINTMENT ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;