const express = require("express");
const router = express.Router();
const sendMail = require("./../utilities/sendMail");

router.post("/", (req, res) => {
  try {
    const message = {
      from: `"Trie-eg" <${process.env.EMAIL}>`,
      to: `${req.body.email}`,
      subject: `Thanks for filling out our form Mr./Mrs ${req.body.fullName}`,
      text: "We will look over your message and get back to you.",
    };
    sendMail(message);
    res.json({ message: "message sent successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = router;
