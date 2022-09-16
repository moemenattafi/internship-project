const {validationResult} = require('express-validator');
const Participant=require('../models/participant');



exports.register = async (req ,res,next) =>{
  const errors =validationResult(req);
  if (!errors.isEmpty()) return;

    const nomEtPrenom= req.body.nomEtPrenom;
    const numCin = req.body.numCin;
    const directionEtService = req.body.directionEtService;
    const entreprise = req.body.entreprise;

    try{
      const participantDetails = {
        nomEtPrenom : nomEtPrenom,
        numCin : numCin,
        directionEtService :directionEtService,
        entreprise :entreprise
      }
      const result= await Participant.save(participantDetails);
      res.status(201).json({ message :'Participant registered!'})
    }
    catch(err){
      if(!err.statusCode){
        err.statusCode=500;
      }
      next(err);
    }
}
