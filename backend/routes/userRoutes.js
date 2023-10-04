const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const jwt = require("jsonwebtoken");
app.use(bodyParser.json());
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

const generatetoken = (userv) => {
  const payload = { email: userv.email, _id: userv._id };
  const secretkey = "@howare3thing";
  const option = {
    expiresIn: "8h",
  };
  return jwt.sign(payload, secretkey, option);
};

router.use("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await Usermodels.findOne({ email });
  if (!user) {
    return res.status(409).json({ email: "Email is not found" });
  }
  if (user.password === password) {
    const token = generatetoken(user);
    res.status(201).json({ message: "Registration successful", token });
  } else {
    res.status(409).json({ password: "wrong password" });
  }
});

module.exports = router;
