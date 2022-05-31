const express = require("express");
const router = express.Router();

// Controllers
const { getTest } = require('../controllers/test');
// middleware

// api routes
router.get('/test', getTest);

module.exports = router;