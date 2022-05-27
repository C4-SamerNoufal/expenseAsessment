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




module.exports = {
    addExpense,
    
  };

