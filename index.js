const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const homeRouts = require("./routes/home.route");
const app = express();
const PORT = 3000;

// Configure body-parser middleware for handling JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect with database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/books");
    console.log("Database connected successfully!");
  } catch (err) {
    console.log("Database connection failed!");
    console.log(err.message);
    process.exit(1);
  }
};

// Routes
app.use("/", homeRouts);

// server listening
app.listen(PORT, async () => {
  console.log("Server listening on port http://localhost:" + PORT);

  await connectDB();
});
