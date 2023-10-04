const mongoose = require("mongoose");
const Usermodels = require("./usermodels");
const DataSchema = new mongoose.Schema({
  userId1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Usermodels,
    required: true,
  },
  userId2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Usermodels,
    required: true,
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

const Datamodels = mongoose.model("chatdata", DataSchema);
module.exports = Datamodels;
