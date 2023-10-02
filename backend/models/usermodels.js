const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Usermodels = mongoose.model("users", Userschema);
module.exports = Usermodels;
