const express = require("express");
const authentication = require("../middleware/authentication");

const categoryRouter = express.Router();

const {
  addCategory,
  getCategories,
  updateCategory,
} = require("../controllers/categoriesControllers");

//1- create end points for register
categoryRouter.post("/add", authentication, addCategory);
categoryRouter.get("/", authentication, getCategories);
categoryRouter.put("/:id", authentication, updateCategory);

module.exports = { categoryRouter };
