const express = require("express");
const router = express.Router();

// Controllers
const { getTest } = require('../controllers/test');
const { getMerlin } = require('../controllers/test');
const { createTest } = require('../controllers/test');

// middlewares

// api routes
//CREATE
//router.post
router.post('/createTest', createTest);//POST to mongodb template
//DELETE
//router.delete
//UPDATE
//router.patch
//GET
//router.get
router.get('/test', getTest);
router.get('/merlin', getMerlin);//GET from mongodb template

module.exports = router;