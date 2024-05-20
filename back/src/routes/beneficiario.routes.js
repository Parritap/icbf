const express = require('express')
const router = express.Router()
const beneficiarioController = require('../controllers/beneficiario.controller');

router.get('/', beneficiarioController.findAll);

router.get('/:id', beneficiarioController.findById);

router.post('/create', beneficiarioController.create);

module.exports = router;
