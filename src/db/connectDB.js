require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_Name });
    console.log(`Connected to database ${process.env.DB_Name} successfully`);
  } catch (error) {
    console.error("Error connecting to db: ", process.env.DB_Name);
  }
};

module.exports = connectDB;