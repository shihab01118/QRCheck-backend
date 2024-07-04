require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 8000;

// db route
const connectDB = require("./src/db/connectDB");

// connect to db
connectDB();

app.get("/", (req, res) => {
  res.send("QR Check app is running...");
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});
