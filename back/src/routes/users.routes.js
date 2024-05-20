const express = require('express')
const router = express.Router()
const userController = require('../controllers/users.controller');

router.get('/', userController.findAll);


// Retrieve a single employee with id
router.get('/:id', userController.findById);

// Update a employee with id
//router.put('/:id', userController.update);

module.exports = router; 

