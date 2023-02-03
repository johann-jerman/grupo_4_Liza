const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');
const productController = require('../controller/productController');
const userController = require('../controller/userController');

router.get('/',mainController.home);
router.get('/man',productController.man);
router.get('/women',productController.women);
router.get('/product',productController.product);
router.get('/shopping-cart',productController.shoppingCart);
router.get('/login',userController.login);
router.get('/register',userController.register);
router.get('/admin',userController.see);
router.get('/newProduct',productController.create);


module.exports = router