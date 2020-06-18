const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  src: {
    // image source
    type: String,
    required: true,
  },
  name: {
    // item name
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
    // full decription about this item
    type: String,
    required: true,
  },
  items: [
    // what are the served items in this service
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
