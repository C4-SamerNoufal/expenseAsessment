const express = require("express");

const userRouter = express.Router();

const {
    register,
  
  } = require("../controllers/UsersControllers");


  //1- create end points for register
  userRouter.post("/register", register);
  userRouter.get("/", getAllUsers);

  module.exports = { userRouter };