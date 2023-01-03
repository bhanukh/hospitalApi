const express = require('express');

const router= express.Router();

router.get('/authFailed', require('../../controllers/authFailed').authFailed);

module.exports = router;