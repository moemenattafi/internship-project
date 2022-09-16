const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
  const authHeader= req.get('Authorization');
  if(!authHeader){
    const error=new Error("Not authenticated!");
    error.statuscode=401;
    throw error;
  }
  const token = authHeader.split(' ')[1];
  let decodedToken ;
  try{
    decodedToken = jwt.verify(token,'secretfortoken')
  }catch(err){
    err.statuscode =500;
    throw err;
  }
  if(!decodedToken){
    const error = new Error("Not authenticated!");
    error.statuscode=401;
    throw error;
  }
  req.isLoggedIn=true;
  req.adminId = decodedToken.adminId;
  req.email = decodedToken.email;
  next();
};
