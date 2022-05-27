
import Redis from 'redis'

const { db } = require("../models/");
const { Category } = require("../models/category.ts");
const { User } = require("../models/user.ts");
const { redisClient } = require("../models/");



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
/////////////////////////////////////////////////
const getCategories = async(req:any,res:any)=>{
redisClient.get('categories',async (error: any,categories: string | null)=>{
    if(error) console.log(error)
    if(categories !=null){
        return res.json(JSON.parse(categories))

    }else{
        try{
            const categories =await Category.findAll({include:['user']})
    
            redisClient.set('categories',3600,JSON.stringify(categories));
    
    
            return res.json(categories)
    
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
    }
})

}


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

