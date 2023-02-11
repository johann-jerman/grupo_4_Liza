const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controller/productController');

//configuracion de multer
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.resolve(__dirname, '../../public/images/products'))
    },

    filename: (req, file, cb)=>{
        let filename = 'product-' + Date.now() + path.extname(file.originalname)
        cb(null, filename)
    }
})

const upload = multer ({storage})

//rutas muestra de productos men y women
router.get('/man',productController.man);
router.get('/women',productController.women);

//ruta por get muestra de producto
router.get('/detail/:id',productController.detail);

//ruta de cracion de producto
router.get('/newProduct',productController.create);
router.post('/newProduct', upload.single('image') ,productController.store);

//rutas de edicion de producto
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);

//rutas del carrito de compra
router.get('/shopping-cart',productController.shoppingCart);

module.exports = router

