const express = require("express");
const passport = require("passport");

const router = express.Router();


const Register = require('../../controllers/register');

router.post('/doctors/register', Register.doctor);

router.post('/patients/register', passport.authenticate('jwt',{
    session:false, failureRedirect: '/api/authFailed'
}),Register.patient);

module.exports= router;