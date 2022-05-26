const { db } = require("../models/");
const { Category } = require("../models/category.ts");
const { User } = require("../models/user.ts");

const addCategory = async (req:any,res:any)=>{

    const {userUuid,body} = req.body
try{
    const user = await User.findOne({where:{uuid:userUuid}})

    const category = await Category.create({body,userId:userUuid.id})

    return res.json(category)

}catch(err){
    console.log(err)
    return res.status(500).json(err)
}
}


module.exports = {
    addCategory
  };