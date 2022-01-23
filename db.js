const mongoose = require("mongoose");
var env = require("dotenv").config();
mongoose.connect(process.env.myServerToken, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo db connection successfull");
});

connection.on("error", () => {
  console.log("Mongo db connection error");
});

module.exports = mongoose;
