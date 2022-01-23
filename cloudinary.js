const cloudinary = require("cloudinary");
var env = require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.cloud,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

module.exports = { cloudinary };
