const express = require('express');

const router =express.Router();

router.post('/doctors/login', require('../../controllers/login').login);

module.exports = router;