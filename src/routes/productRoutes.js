const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

//rutas muestra de productos men y women
router.get('/product/man',productController.man);
router.get('/product/women',productController.women);

//ruta por get muestra de producto
router.get('/product/detail/:id?',productController.detail);


router.get('/product/shopping-cart',productController.shoppingCart);
router.get('/product/newProduct',productController.create);

module.exports = router

