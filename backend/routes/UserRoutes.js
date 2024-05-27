const express = require("express");
const bodyParser = require("body-parser");
const joi = require("joi");
const bcrypt = require("bcrypt");
const router = express.Router();

//Validators
const addUserValidator = joi.object({
  first_name: joi.string().required(),
  last_name: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().required(),
  password: joi.string().required(),
  address: joi.string(),
});

const loginUserValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const User = require("../models/UserModel");

const jsonParser = bodyParser.json();

router.post("/register", jsonParser, async (req, res) => {
  try {
    await addUserValidator.validateAsync(req.body);

    const checkEmail = await User.findOne({ email: req.body.email });
    if (!checkEmail) {
      const user = new User(req.body);
      await user.save();

      res.send({ status: true, message: "User added successfully..." });
    } else {
      res.send({ status: false, message: "User already exists" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.details[0].message });
  }
});

router.post("/login", jsonParser, async (req, res) => {
  try {
    await loginUserValidator.validateAsync(req.body);

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const match = await bcrypt.compare(req.body.password, user.password);

      if (match) {
        res.send({ status: true, user: user, message: "Login Successfull..." });
      } else {
        res.send({ status: false, message: "Invalid Credentials!!" });
      }
    } else {
        res.send({ status: false, message: "Invalid Credentials!!" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.details[0].message });
  }
});

module.exports = router;
