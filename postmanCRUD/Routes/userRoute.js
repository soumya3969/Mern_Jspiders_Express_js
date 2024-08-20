const express = require("express");
const fs = require("fs");
const { join } = require("path");
const {
  userSignup,
  getUser,
  updateUser
} = require("../controllers/userControllers");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("This is user route");
});

userRouter.post("/signup", userSignup);
userRouter.post("/getuser", getUser);
userRouter.put("/update/:mobile", updateUser);

module.exports = { userRouter };
