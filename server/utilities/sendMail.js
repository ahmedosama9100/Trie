const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.PASSWORD}`,
  },
});

function sendMail(message) {
  transporter.sendMail(message, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = sendMail;
