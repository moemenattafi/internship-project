const {validationResult} = require('express-validator');


const Formateur=require('../models/formateur');


exports.fetchAll = async (req ,res,next) =>{
  try{
    const [allFormateurs] = await Formateur.fetchAll();
    res.status(200).json(allFormateurs);

  }catch(err){
    if(!err.statusCode){
      err.statusCode=500;
    }
    next(err);
  }

}

exports.postFormateur = async (req ,res,next) =>{
  const errors =validationResult(req);

  if (!errors.isEmpty()) return;

    const nomEtPrenom = req.body.nomEtPrenom;
    const specialite= req.body.specialite;
    const direction = req.body.direction;

    try{

      const formateurDetails = {
        nomEtPrenom: nomEtPrenom,
        specialite : specialite,
        direction :direction
      }
      const result= await Formateur.save(formateurDetails);
      res.status(201).json({ message :'Formateur registered!'})
    }
    catch(err){
      if(!err.statusCode){
        err.statusCode=500;
      }
      next(err);
    }
}



exports.deleteFormateur = async (req ,res,next) =>{
  try{
    const deleteResponse = await Formateur.delete(req.params.id);
    console.log(deleteResponse);
    res.status(200).json(deleteResponse) ;
  }catch(err){
    if(!err.statusCode){
      err.statusCode=500;
    }
    next(err);
  }

}

