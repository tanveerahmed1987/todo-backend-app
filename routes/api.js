const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Server is up and running");
});

router.post("/register", async (req, res, next) => {
  let user = req.body;
  user.isEnabled = 1;
  const userObj = await User.create(user);
  res.send(userObj);
});

module.exports = router;
