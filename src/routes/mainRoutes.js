const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

router.get('/',mainController.home)
router.get('/login',mainController.login)
router.get('/register',mainController.register)
router.get('/man',mainController.man)
router.get('/women',mainController.women)
router.get('/product',mainController.product)
router.get('/shopping-cart',mainController.shoppingCart)

module.exports = router