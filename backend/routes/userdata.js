const express = require("express");
const router = express.Router();

const Datamodels = require("../models/datamodels");

router.use("/data", async (req, res) => {
  const { datafield, userid1, userid2 } = req.body;
  const newUser = new Datamodels({
    userId1: userid1,
    userId2: userid2,
    testArray: [datafield],
  });
  try {
    const savedUser = await newUser.save();
  } catch (error) {
    return res.status(500).json({
      error:
        "Due to a network problem, your account could not be created. Please retry later.",
    });
  }
  res.status(201).json({ message: "chart add successfully" });
});

module.exports = router;
