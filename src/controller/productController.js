const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    //muestra de productos man y woman
    man : (req, res) => {
        res.render('./products/man',{
            css: '/css/genre.css',
            products
        })
    },
    women : (req, res) => {
        res.render('./products/women',{
            css: '/css/genre.css',
            products
        })
    },
    // muestra de producto particular
    detail : (req, res) => {
        let producto = products.find(product => product.id == req.params.id)
        
        res.render('./products/detail',{
            css: '/css/product.css',
            producto
        })
    },
    //carrito de compras
    shoppingCart : (req, res) => {
        res.render('./products/shopping-cart',{
            css: '/css/shopping-cart.css'
        })
    },
    // creacion de producto
    create: (req, res)=> {
        res.render('./products/new-product',{
         css: '/css/new-product.css'
         })
    },
    store: (req, res)=> {
        // TODO:
        console.log(req.body);

        res.send('img cargada!!!')
    },
    edit: (req, res)=>{
        // TODO:
        res.send('hola mundo')
    },
    update: (req, res)=>{
        // TODO:
        res.send('hola mundo')
    }
};

module.exports = productController