const { db } = require("../models/");
const { Category } = require("../models/category.ts");
const { User } = require("../models/user.ts");

const addCategory = async (req:any,res:any)=>{

    const {userUuid,name} = req.body
try{
    const user = await db.User.findOne({where:{uuid:userUuid}})

    const category = await Category.create({name,userId:userUuid.id})

    return res.json(category)

}catch(err){
    console.log(err)
    return res.status(500).json(err)
}
}

const getCategories = async(req:any,res:any)=>{
    try{
        const categories = await Category.findAll({include:[User]})
        return res.json(categories)

}catch(err){
    console.log(err)
    return res.status(500).json(err)
}
}






module.exports = {
    addCategory
  };

