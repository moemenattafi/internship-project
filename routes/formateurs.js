const express = require('express');

const { body } = require('express-validator');

const formateursController=require('../controllers/formateurs');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/',formateursController.fetchAll);


router.post(
  '/',
  [
    body('nomEtPrenom').trim().not().isEmpty(),
    body('specialite').trim().not().isEmpty(),
    body('direction').trim().not().isEmpty(),
  ],
  formateursController.postFormateur
);



router.delete('/:id',formateursController.deleteFormateur);

module.exports=router;
