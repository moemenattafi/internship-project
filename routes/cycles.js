const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const cyclesController=require('../controllers/cycles');

router.get('/',cyclesController.fetchAll);

router.post(
  '/',
  [
    /*body('entreprise').trim().not().isEmpty,
    body('numAction').trim().not().isEmpty,
    body('themeDeFormation').trim().not().isEmpty,
    body('lieuDeDeroulement').trim().not().isEmpty,
    body('debutDePeriode').trim().not().isEmpty,
    body('finDePeriode').trim().not().isEmpty,
    body('horaireDeDebut').trim().not().isEmpty,
    body('horaireDeFin ').trim().not().isEmpty,
    body('debutPause').trim().not().isEmpty,
    body('finPause').trim().not().isEmpty,
    body('numSalle').trim().not().isEmpty,
    body('creditDimpot').trim().not().isEmpty,
    body('droitsDeTirageIndiv').trim().not().isEmpty,
    body('droitsDeTirageCollect').trim().not().isEmpty,
    body('modeDeFormation').trim().not().isEmpty,
    body('gouvernorat').trim().not().isEmpty,*/
  ],
  cyclesController.postCycle
);
router.delete('/:id',cyclesController.deleteCycle);

module.exports=router;
