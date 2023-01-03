const express = require("express");

const router=express.Router();

router.use('/api', require('./api/login'));
router.use('/api', require('./api/register'));
router.use('/api', require('./api/report'));
router.use('/api', require('./api/authFailed'));

module.exports = router;