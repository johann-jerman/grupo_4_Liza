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
            let category = await db.CategoryProduct.findAll();
            let size = await db.Size.findAll();
            
            res.render('./products/new-product',{
                css: '/css/new-product.css',
                color,
                size,
                category
            })
        } catch (error) {
            res.json(error)
        }

        
    },
    store: async (req, res)=> {
        
        let error = validationResult(req)
       

        if(!error.isEmpty()){
            return res.render('./products/new-product',{
                css: '/css/new-product.css',
                error : error.mapped(),
                oldBody: req.body
                })
                
        }
        
        // console.log(newProduct);

        try {
            let body = req.body
            let files = req.files
            let size = req.body.size
            let color = req.body.color
            
            let fileToCreate = files.map(file=>({image:file.filename}))
            let productCreate = await db.Product.create({
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                category_id:req.body.category,

            });
            let colorToCreate = color.map(color=>{
                return {
                    color_id : parseInt(color),
                    product_id : productCreate.id
                }
            })
            await db.ColorProduct.bulkCreate(colorToCreate)
            let sizeToCreate = size.map(size => {
                return {
                    size_id : parseInt(size),
                    product_id : productCreate.id
                }
            })          
            await db.SizeProduct.bulkCreate(sizeToCreate)
            let createImage = await db.Image.bulkCreate(fileToCreate)
            let pivotImage = createImage.map(image => {
                return {
                    image_id : image.id,
                    product_id : productCreate.id
                }
            })
            await db.ImageProduct.bulkCreate(pivotImage)
            res.redirect("/")

        } catch (error) {
            res.json(error)
        }
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