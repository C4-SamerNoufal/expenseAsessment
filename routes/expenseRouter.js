const express = require("express");
const authentication = require("../middleware/authentication");

const expenseRouter = express.Router();

const {
  addExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/ExpensesControllers");

expenseRouter.post("/add", authentication, addExpense);
expenseRouter.put("/:id", authentication, updateExpense);
expenseRouter.delete("/:id", authentication, deleteExpense);

module.exports = { expenseRouter };
