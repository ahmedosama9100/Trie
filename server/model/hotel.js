const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  rating: {
    type: String,
  },
  description: {
    type: String,
  },
  numberOfRooms: {
    type: Number,
    min: 0,
  },
  link: {
    type: String,
  },
});

module.exports = Hotel = mongoose.model("Hotel", hotelSchema);
