const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

router.get('/',mainController.home);

router.get('/prueba',   mainController.prueba);
router.get('/contactanos',   mainController.contactanos);

// const productController = require('../controller/productController');
// router.get('/man',productController.man);
// router.get('/women',productController.women);
// router.get('/product',productController.product);
// router.get('/shopping-cart',productController.shoppingCart);
// router.get('/new-product',productController.create);


// const userController = require('../controller/userController');
// router.get('/login',userController.login);
// router.get('/register',userController.register);
// router.get('/admin',userController.see);


module.exports = router