const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const Admin = require('../models/admin');

const authController=require('../controllers/auth');

router.post(
  '/signup',
  [
    body('name').trim().not().isEmpty(),
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email.')
    .custom(async (email) => {
      const admin = await Admin.find(email);
      if (admin[0].length > 0) {
        return Promise.reject("Email Address already exist!");
      }
    })
    //.normalizeEmail() problem occurs here!!!!!
    ,
    body('password').trim().isLength({ min: 7 }),
  ],
  authController.signup
);
router.post('/login',authController.login)

module.exports=router;
