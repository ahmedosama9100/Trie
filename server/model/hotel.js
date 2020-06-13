const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  items: [
    {
      itemName: {
        type: String,
        required: true,
      },
      currentAmount: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],
});

module.exports = Hotel = mongoose.model("Hotel", hotelSchema);
