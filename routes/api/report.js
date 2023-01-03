const express = require('express');
const passport = require('passport');
const router = express.Router();

const Reports= require('../../controllers/report');

router.post('/patients/:id/create_report',passport.authenticate('jwt',{session:false,
failureRedirect:'/api/authFailed'}) ,Reports.createReport);

router.get('/patient/:id/all_reports',passport.authenticate('jwt',{session:false,
    failureRedirect:'/api/authFailed'}), Reports.allReports);

router.get('/reports/:status',passport.authenticate('jwt',{session:false,
    failureRedirect:'/api/authFailed'}), Reports.statusVise);

module.exports = router;