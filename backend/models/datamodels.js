const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  userId1: {
    type: String,
  },
  userId2: {
    type: String,
  },
  testArray: [
    {
      type: String,
      // isUser1: {
      //   type: Boolean,
      //   default: true,
      // },
      // isUser2: {
      //   type: Boolean,
      //   default: true,
      // },
    },
  ],
});

const Datamodels = mongoose.model("users", DataSchema);
module.exports = Datamodels;
