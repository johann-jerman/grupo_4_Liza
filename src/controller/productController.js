const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    man : (req, res) => {
        res.render('./products/man',{
            css: '/css/genre.css',
            products: products
        })
    },
    women : (req, res) => {
        res.render('./products/women',{
            css: '/css/genre.css',
            products: products
        })
    },
    detail : (req, res) => {
        let producto = products.find(product => product.id == req.params.id)
        
        res.render('./products/detail',{
            css: '/css/product.css',
            producto: producto
        })
    },
    shoppingCart : (req, res) => {
        res.render('./products/shopping-cart',{
            css: '/css/shopping-cart.css'
        })
    },
    create: (req, res)=> {
        res.render('./products/new-product',{
         css: '/css/new-product.css'
         })
    }
};

module.exports = productController