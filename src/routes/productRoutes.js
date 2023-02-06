const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controller/productController');

//configuracion de multer
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'public/images/products')
    },

    filename: (req, file, cb)=>{
        let filename = Date.now() + path.extname(file.originalname)
        cb(null, filename)
    }
})

const upload = multer ({storage})

//rutas muestra de productos men y women
router.get('/product/man',productController.man);
router.get('/product/women',productController.women);

//ruta por get muestra de producto
router.get('/product/detail/:id',productController.detail);

//ruta de cracion de producto
router.get('/product/newProduct',productController.create);
router.post('/product/newProduct',productController.store);

//rutas del carrito de compra
router.get('/product/shopping-cart',productController.shoppingCart);

module.exports = router

