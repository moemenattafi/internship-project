const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const Participant= require('../models/participant');

const participantController = require('../controllers/participant');

router.post(
  '/',
  [
    body('nomEtPrenom').trim().not().isEmpty(),
    body('numCin')
    .custom(async (numCin) => {
      const participant = await Participant.find(numCin);
      if (participant[0].length > 0) {
        return Promise.reject("Participant already exist!");
      }
    })
    //.normalizeEmail() problem occurs here!!!!!
    ,
    body('directionEtService').trim(),
    body('entreprise').trim(),
  ],
  participantController.register
);
module.exports=router;


