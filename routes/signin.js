const express = require('express');
const {signIn} = require('../controllers/signin');
const validator = require('../validator');
const router = express.Router();

router.post("/signin", signIn);

module.exports = router;