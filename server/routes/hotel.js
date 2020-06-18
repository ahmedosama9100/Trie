const express = require("express");
const router = express.Router();
const Hotel = require("./../model/hotel");

router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find({}, "");
    res.json(hotels).status(200);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:hotelid", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.hotelid);
    res.json(hotel).status(200);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = router;
