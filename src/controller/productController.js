const fs = require('fs');
const path = require('path');
const {validationResult} = require("express-validator");
const db = require('../database/models');
const { log } = require('console');

//let productsFilePath = path.join(__dirname, '../data/products.json');
//let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const productController = {
    //muestra de productos man y woman
    man : async (req, res) => {
        try {  
            let products = await db.Product.findAll({
                where : {
                    category_id : 1
                }
            })
            res.render('./products/man',{
                css: '/css/genre.css',
                products
            })
            
        }catch (error) {
            res.render("error")
        }
     
    },
    women : async (req, res) => {
        try {  
            let products = await db.Product.findAll({
                where : {
                    category_id : 2
                }
            })
            res.render('./products/women',{
                css: '/css/genre.css',
                products
            })
            
        }catch (error) {
            res.render("error")
        }
   
    },
    // muestra de producto particular
    detail :async(req, res) => {
        let id = req.params.id
        let producto = await db.Product.findByPk(id)
        
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
    create: async (req, res)=> {
        
        try {
            let color = await db.Color.findAll();
            let size = await db.Size.findAll();
            console.log(color);
            res.render('./products/new-product',{
                css: '/css/new-product.css',
                color,
                size
            })
        } catch (error) {
            res.render("error")
        }

        
    },
    store: (req, res)=> {
        let body = req.body
        let file = req.file
        let error = validationResult(req)
       

        if(!error.isEmpty()){
            return res.render('./products/new-product',{
                css: '/css/new-product.css',
                error : error.mapped(),
                oldBody: req.body
                })
                
        }
        
        // console.log(newProduct);

        let newProduct = {
            ...body,
            id : Date.now(),
            image : file ? file.filename : ' ' 
        }

        products.push(newProduct);

        fs.writeFileSync(productsFilePath ,JSON.stringify(products, null, ' '))

        res.redirect('/product/newProduct')
    },
    //edicion de producto
    edit: (req, res)=>{
        let producto = products.find(product => product.id == req.params.id)

        res.render('./products/edit-product',{
            css: '/css/new-product.css',
            producto
        })
    },
    update: (req, res)=>{
        let idUrl = req.params.id; 
        let product = products.find(product => product.id == idUrl);
        
        let body = req.body;
        
        product.name = body.name;
        product.description = body.description;
        product.price = body.price;
        product.size = body.size;
        product.category = body.category;
        
        fs.writeFileSync(productsFilePath ,JSON.stringify(products, null, ' '))
        
        res.redirect('/')
    },
    // eliminar 1 producto
    delete: (req, res)=>{
        let idUrl = req.params.id; 
        let producto = products.find(product => product.id == idUrl);

        res.render('./products/delete-product',{
            css: '/css/new-product.css',
            producto
        })
    },
    erase: (req, res)=>{
        let idUrl = req.params.id; 
        let product = products.find(product => product.id == idUrl);
        let index = products.indexOf(product);

        products.splice(index, 1);


        fs.unlinkSync(path.resolve(__dirname, '../../public/images/products/' + product.image));
        fs.writeFileSync(productsFilePath ,JSON.stringify(products, null, ' '));

        res.redirect('/');
    } 
};

module.exports = productController