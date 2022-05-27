const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db } = require("../models/");
// const { User } = require("../models/user.ts");
const Models = require('./../models');
const User = Models.User;

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
         const user =  await User.create({name,email,hashPassword})
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

///////////////////////////////////////////
///////////////login

const login = async (req:any, res:any) => {
    const password = req.body.password;
    const email = req.body.email.toLowerCase();

const user = await User.findOne({where:{email:email}})
if (!user) {
    return res.status(404).json({
      success: false,
      message: `The email doesn't exist`,
    });
  }
        try {
          const valid = await bcrypt.compare(password, user.password);
          if (!valid) {
            return res.status(403).json({
              success: false,
              message: `The password you have entered is incorrect`,
            });
          }
          const payload = {
            userId: user.id,
            email: user.email,
          };
  
          const options = {
            expiresIn: "60m",
          };
          const token = await jwt.sign(payload, process.env.SECRET, options);
          res.status(200).json({
            success: true,
            message: `Valid login credentials`,
            token: token,
          });
     
      }
      catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
  };




module.exports = {
    register,
    getAllUsers,
    login,
  };