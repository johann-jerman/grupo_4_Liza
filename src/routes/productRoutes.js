const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const upload = require('../middleware/multer');
const productValidator = require("../middleware/productValidator");


//rutas muestra de productos men y women
router.get('/man',productController.man);
router.get('/women',productController.women);

//ruta de cracion de producto
router.get('/newProduct',productController.create);
router.post('/newProduct', upload.any('image'),productValidator ,productController.store);

//rutas de edicion de producto
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);

//ruta por get muestra de producto
router.get('/detail/:id',productController.detail);

// ruta eliminado de ruta 
router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.erase);

//rutas del carrito de compra
router.get('/shopping-cart',productController.shoppingCart);

module.exports = router

