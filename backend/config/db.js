const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying local MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB ERROR:");
    console.log(error.message);
  }
};

module.exports = connectDB;