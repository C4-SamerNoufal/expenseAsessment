const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db } = require("../models/");
const { User } = require("../models/user.ts");

import { appendFile } from 'fs';
import{v4 as uuidv4} from 'uuid';


const register = async (req: any, res: any) => {

    const {
        name,
        email,
        password,
      } = req.body;

      const hashPassword = await bcrypt.hash(password, 10);
      try{
         const user =  await User.create({name,email,password})
         return res.json(user)
      }catch(err){
          console.log(err)
          return res.status(500).json(err)
      }


}

const getAllUsers = async (req: any,res: any)=>{
    try{
        const users = await User.find()
        return res.json(users)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:"Something Wrong"})
    }
}




module.exports = {
    register,
    getAllUsers,
  };