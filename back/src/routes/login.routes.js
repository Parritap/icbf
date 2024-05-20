const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login.controller.js');


// Login in with email and password
router.post('/', loginController.login);

module.exports = router;