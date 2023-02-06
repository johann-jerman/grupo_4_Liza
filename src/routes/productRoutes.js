const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

//rutas muestra de productos men y women
router.get('/product/man',productController.man);
router.get('/product/women',productController.women);

//ruta por get muestra de producto
router.get('/product/detail/:id',productController.detail);

//ruta de cracion de producto
router.get('/product/newProduct',productController.create);
router.post('/product/newProduct',productController.store);
router.get('/product/shopping-cart',productController.shoppingCart);

module.exports = router

