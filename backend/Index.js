const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Image Schema
const imageSchema = new mongoose.Schema({
  imageUrl: String,
});

const Image = mongoose.model("Image", imageSchema);



// Get image
app.get("/image", async (req, res) => {
  const image = await Image.findOne();
  res.json(image);
});

app.listen(5000, () => {
  console.log("Server running on port 5000✔");
  console.log("Database is connected...✔")
});
