const express = require('express');
const router = express.Router();

const mainController = require('../controller/main.controller');
const guessMiddleware = require('../../middleware/guessMiddleware');


router.get('/', mainController.home);

router.get('/prueba',   mainController.prueba);

router.post('/cart', mainController.cart)


module.exports = router