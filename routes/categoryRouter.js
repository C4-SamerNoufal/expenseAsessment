
const express = require("express");

const categoryRouter = express.Router();

const {
    addCategory,
    getCategories,
    updateCategory
  
  } = require("../controllers/categoriesControllers");


  //1- create end points for register
  categoryRouter.post("/add", addCategory);
  categoryRouter.get("/", getCategories);
  commentRouter.put("/:id", authentication, updateCategory);


  module.exports = { categoryRouter };