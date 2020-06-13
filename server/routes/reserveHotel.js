const express = require("express");
const router = express.Router();
const Hotel = require("./../model/hotel");
const sendMail = require("./../utilities/sendMail");

router.post("/:hotelid", async (req, res) => {
  let message = {
    from: `"Trie-eg" <${process.env.EMAIL}>`,
    to: `${req.body.email}`,
  };

  try {
    const hotel = await Hotel.findById(req.params.hotelid);
    const newHotelItems = [];
    const hotelItems = hotel.items;
    const requestBody = req.body;

    const requestedItems = JSON.parse(requestBody.items);
    console.log(requestedItems[0]);
    requestedItems.forEach((item) => {
      hotelItems.forEach((hotelItem) => {
        if (item.itemName === hotelItem.itemName) {
          if (hotelItem.currentAmount >= item.itemAmount) {
            newHotelItems.push({
              itemName: item.itemName,
              currentAmount: hotelItem.currentAmount - item.itemAmount,
            });
          } else {
            throw "no items available";
          }
        }
      });
    });

    await Hotel.updateOne(
      { _id: req.params.hotelid },
      { $set: { items: newHotelItems } }
    );

    message.subject = "Order Confiramtion";
    message.html = `<h1>Order Summary</h1>
  <h3>Mr./Mrs. ${requestBody.name} You've reserved: </h3>
  ${requestedItems.map((item) => `<p>${item.itemName}: ${item.itemAmount}</p>`)}
  <p>and your order number is : <strong>${hotel._id}</strong></p>
  `;
    res.json({ message: "reserved successfully" });
  } catch (err) {
    console.log(err);
    message.subject = "Rejected Request";
    message.html = `<p>Sorry, there are no available rooms in this hotel 😔</p>
    <p>Please try again later </p>
    `;
    res.json({ message: "Error Happened when reserve !!!" });
  }

  sendMail(message);
});

module.exports = router;
