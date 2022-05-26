//import connenction from database
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db } = require("../models/index");
const { User } = require("../models/user");

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

module.exports = {
    register,
  };