// const { db } = require("../models/");
const { Expense } = require("../models/category.ts");
// const { User } = require("../models/user.ts");

const addExpense = async (req:any,res:any)=>{

    const userId = req.params.id;

    const {categoryId,amount} = req.body
try{
    const category = await db.Category.findOne({where:{id:userId}})

    const expense = await Expense.create({amount,category_Id:categoryId})

    return res.json(category)

}catch(err){
    console.log(err)
    return res.status(500).json(err)
}
}

const updateExpense = async(req:any,res:any)=>{
    const ExpenseId = req.params.id;
    const {amount} = req.body;
    try{
        const expense = await Expense.findOne({where:ExpenseId})
        expense.amount = amount;
        await expense.save()
        return res.json(expense)
    } catch (err) {
              console.log(err)
              return res.status(500).json({ error: 'Something went wrong' })
            }
}

const deleteExpense = async (req:any,res:any)=>{

    const id = req.params.id

    try {
        const expense = await Expense.findOne({ where: { id } })
        await expense.destroy()
    
        return res.json({ message: 'Expense deleted!' })
        
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
      }

}


module.exports = {
    addExpense,
    updateExpense,
    
  };

