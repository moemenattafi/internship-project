const {validationResult} = require('express-validator');
const Cycle= require('../models/cycle');
exports.fetchAll = async (req ,res,next) =>{
  try{
    const [allCycles] = await Cycle.fetchAll();
    res.status(200).json(allCycles);

  }catch(err){
    if(!err.statusCode){
      err.statusCode=500;
    }
    next(err);
  }
}
exports.postCycle = async (req ,res,next) =>{
  const errors =validationResult(req);

  if (!errors.isEmpty()) return;
  
  const entreprise= req.body.entreprise;
  const numAction= req.body.numAction;
  const themeDeFormation= req.body.themeDeFormation;
  const lieuDeDeroulement= req.body.lieuDeDeroulement;
  const debutDePeriode= req.body.debutDePeriode;
  const finDePeriode= req.body.finDePeriode;
  const horaireDeDebut= req.body.horaireDeDebut;
  const horaireDeFin= req.body.horaireDeFin;
  const debutPause= req.body.debutPause;
  const finPause= req.body.finPause;
  const numSalle= req.body.numSalle;
  const creditDimpot= req.body.creditDimpot;
  const droitsDeTirageIndiv= req.body.droitsDeTirageIndiv;
  const droitsDeTirageCollect= req.body.droitsDeTirageCollect;
  const modeDeFormation= req.body.modeDeFormation;
  const gouvernorat= req.body.gouvernorat;

    try{

      const cycleDetails = {
        entreprise:entreprise,
        numAction:numAction,
        themeDeFormation:themeDeFormation,
        lieuDeDeroulement:lieuDeDeroulement,
        debutDePeriode:debutDePeriode,
        finDePeriode:finDePeriode,
        horaireDeDebut:horaireDeDebut,
        horaireDeFin:horaireDeFin,
        debutPause:debutPause,
        finPause:finPause,
        numSalle:numSalle,
        creditDimpot:creditDimpot,
        droitsDeTirageIndiv:droitsDeTirageIndiv,
        droitsDeTirageCollect:droitsDeTirageCollect,
        modeDeFormation:modeDeFormation,
        gouvernorat:gouvernorat,
      }
      const result= await Cycle.save(cycleDetails);
      res.status(201).json({ message :'Cycle registered!'})
    }
    catch(err){
      if(!err.statusCode){
        err.statusCode=500;
      }
      next(err);
    }
}
exports.deleteCycle = async (req ,res,next) =>{
  try{
    const deleteResponse = await Cycle.delete(req.params.idcycle);
    console.log(deleteResponse);
    res.status(200).json(deleteResponse) ;
  }catch(err){
    if(!err.statusCode){
      err.statusCode=500;
    }
    next(err);
  }

}

