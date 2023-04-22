const express = require('express');
const router = express.Router();

const mainController = require('../controller/main.controller');

router.get('/', mainController.home);

router.get('/prueba',   mainController.prueba);

router.get('/favorite',   mainController.favorite);

module.exports = router