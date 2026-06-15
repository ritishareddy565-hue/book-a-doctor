console.log("HELLO FROM SERVER");

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

console.log("STEP 1: Server starting...");

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Book a Doctor API Running");
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});