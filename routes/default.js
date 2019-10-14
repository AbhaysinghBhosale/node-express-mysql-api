const express = require('express');
const {defaultRoute} = require('../controllers/default');
const router = express.Router();

router.get("/", defaultRoute);

module.exports = router;