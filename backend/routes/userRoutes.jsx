const express = require("express");
const router = express.Router();

const Usermodels = require("../models/usermodels");

router.use("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await Usermodels.findOne({ email });
  if (user) {
    return res.status(409).json({ email: "Email already exists" });
  }
  const newUser = new Usermodels({
    name: name,
    email: email,
    password: password,
  });
  try {
    const savedUser = await newUser.save();
  } catch (error) {
    return res.status(500).json({
      error:
        "Due to a network problem, your account could not be created. Please retry later.",
    });
  }
  res.status(201).json({ message: "Registration successful" });
});

router.use("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await Usermodels.findOne({ email });
  if (!user) {
    return res.status(409).json({ email: "Email is not found" });
  }
  if (user.password === password) {
    res.status(201).json({ message: "Registration successful" });
  } else {
    res.status(409).json({ password: "wrong password" });
  }
});

module.exports = router;
