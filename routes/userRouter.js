const express = require("express");

const userRouter = express.Router();

const {
    register,
    getAllUsers,
    login,
  
  } = require("../controllers/UsersControllers");


  //1- create end points for register
  userRouter.post("/register", register);
  userRouter.get("/", getAllUsers);
  userRouter.post("/login", login);

  module.exports = { userRouter };