const express = require("express");
const authentication = require("../middleware/authentication");

const expenseRouter = express.Router();

const {
  addExpense,
  updateExpense,
} = require("../controllers/ExpensesControllers");

expenseRouter.post("/add", authentication, addExpense);
expenseRouter.put("/:id", authentication, updateExpense);

module.exports = { expenseRouter };
