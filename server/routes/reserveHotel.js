const express = require("express");
const router = express.Router();
const Hotel = require("./../model/hotel");
const sendMail = require("./../utilities/sendMail");

// return the minimum number of rooms to reserve
function calculateRooms(numberOfRooms) {
  const total = {
    single: 0,
    double: 0,
    trible: 0,
  };
  const modTwo = numberOfRooms % 2;
  const modThree = numberOfRooms % 3;
  if (modThree === 1) {
    if (!modTwo) {
      total.double = numberOfRooms / 2;
    } else {
      total.single = 1;
      total.trible = parseInt(numberOfRooms / 3);
    }
  } else if (modThree === 2) {
    total.double = 1;
    total.trible = parseInt(numberOfRooms / 3);
  } else {
    total.trible = numberOfRooms / 3;
  }
  return total;
}

router.post("/:hotelid", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.hotelid);
    const numberOfRooms = hotel.numberOfRooms;
    const requestedRooms = req.body.numberOfRooms;
    let message = {};
    // there is available number of rooms
    if (numberOfRooms - requestedRooms >= 0) {
      await Hotel.updateOne(
        { _id: req.params.hotelid },
        { $set: { numberOfRooms: numberOfRooms - requestedRooms } }
      );
      const totalRooms = calculateRooms(requestedRooms);
      message = {
        from: `"Trie-eg" <${process.env.EMAIL}>`,
        to: `${req.body.email}`,
        subject: "Order Confiramtion",
        html: `<h1>Order Summary</h1>
        <h3>Mr./Mrs. ${req.body.name} You reserve</h3>
        <p>Single: ${totalRooms.single}</p>
        <p>Double: ${totalRooms.double}</p>
        <p>Trible: ${totalRooms.trible}</p>
        `,
      };
    } else {
      message = {
        from: `"Trie-eg" <${process.env.EMAIL}>`,
        to: `${req.body.email}`,
        subject: "Sorry",
        text: "The hotel is fully reserved 😔",
      };
    }
    sendMail(message);
    res.json({ message: "reserved successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Error Happened when reserve !!!" });
  }
});

module.exports = router;
