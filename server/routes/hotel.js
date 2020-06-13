const express = require("express");
const router = express.Router();
const Hotel = require("./../model/hotel");

router.get("/", async (req, res) => {
  const hotels = await Hotel.find({}, "_id name rating location link");
  res.json(hotels).status(200);
});

router.get("/:hotelid", async (req, res) => {
  const hotel = await Hotel.findById(req.params.hotelid);
  res.json(hotel).status(200);
});

module.exports = router;
