const {validationResult} = require('express-validator');

const bcrypt =require('bcryptjs');

const jwt = require('jsonwebtoken')

const Admin=require('../models/admin');

exports.signup = async (req ,res,next) =>{
  const errors =validationResult(req);
  if (!errors.isEmpty()) return;

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try{
      const hashedPassword = await bcrypt.hash(password,12);
      const adminDetails = {
        name : name,
        email : email,
        password :hashedPassword
      }
      const result= await Admin.save(adminDetails);
      res.status(201).json({ message :'Admin registered!'})
    }
    catch(err){
      if(!err.statusCode){
        err.statusCode=500;
      }
      next(err);
    }
}



exports.login = async (req ,res,next) =>{
  const email= req.body.email;
  const password =req.body.password;

  try{
  const admin = await Admin.find(email);
  if(admin[0].length !== 1){
    const error= new Error("An admin with this email could not be found!");
    error.statusCode=401;
    throw error;

  }
  const storedAdmin=admin[0][0];

  const isEqual = await bcrypt.compare(password,storedAdmin.password);

  if(!isEqual){
    const error=new Error("Wrong password");
    error.statusCode=401;
    throw error;
  }
  const token = jwt.sign({
    email: storedAdmin.email,
    adminId: storedAdmin.id,
  },"secretfortoken",
  {expiresIn:'1d'},
  );
  res.status(200).json({token:token,adminId:storedAdmin.id});
  }
  catch(err){
    if(!err.statusCode){
      err.statusCode=500;
    }
    next(err);
  }
}
