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
        const categories = await Category.findAll({include:['user']})
        return res.json(categories)

}catch(err){
    console.log(err)
    return res.status(500).json(err)
}
}

// app.put('/users/:uuid', async (req, res) => {
//     const uuid = req.params.uuid
//     const { name, email, role } = req.body
//     try {
//       const user = await User.findOne({ where: { uuid } })
  
//       user.name = name
//       user.email = email
//       user.role = role
  
//       await user.save()
  
//       return res.json(user)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json({ error: 'Something went wrong' })
//     }
//   })

const updateCategory = async(req:any,res:any)=>{
    const categoryId = req.params.id;
    const {name} = req.body;
    try{
        const category = await Category.findOne({where:categoryId})
        category.name = name;
        await category.save()
        return res.json(category)
    } catch (err) {
              console.log(err)
              return res.status(500).json({ error: 'Something went wrong' })
            }
}












module.exports = {
    addCategory,
    getCategories,
    updateCategory
  };

