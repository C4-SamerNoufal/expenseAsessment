//import connenction from database
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db } = require("../models/index");

const register = async (req: any, res: any) => {

    const {
        name,
        email,
        password,
      } = req.body;













}