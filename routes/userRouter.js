const express = require("express");

const userRouter = express.Router();

const {
    register,
  
  } = require("../controllers/UsersConrollers");


  //1- create end points for register
  userRouter.post("/register", register);

  module.exports = { userRouter };