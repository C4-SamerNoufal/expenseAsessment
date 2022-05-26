
const express = require("express");

const categoryRouter = express.Router();

const {
    addCategory
  
  } = require("../controllers/categoriesControllers");


  //1- create end points for register
  categoryRouter.post("/add", addCategory);


  module.exports = { categoryRouter };