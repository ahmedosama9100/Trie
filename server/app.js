require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/trie", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/send-request", require("./routes/contactUs"));
app.use("/service/hotel", require("./routes/hotel"));
app.use("/hotel/reserve", require("./routes/reserveHotel"));

app.listen(8000, () => console.log("server start working on port 8000"));
