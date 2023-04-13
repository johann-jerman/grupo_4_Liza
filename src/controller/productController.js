const fs = require('fs');
const path = require('path');
const {validationResult} = require("express-validator");
const db = require('../database/models');

const productController = {
    //muestra de productos man y woman
    man : async (req, res) => {
        try {  
            let products = await db.Product.findAll({
                include: [{association: 'image'}],
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
        try {
            let id = req.params.id
            let producto = await db.Product.findByPk(id, {
                include: [
                    {association: 'image'},
                    {association: 'size'},
                    {association: 'color'}
                ]
            })
    
            res.render('./products/detail',{
                css: '/css/product.css',
                producto
            })
        } catch (error) {
            res.render('error');
        }
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
            res.render('error');
        }

        
    },
    store: async (req, res)=> {
        
        let error = validationResult(req)
        if(!error.isEmpty()){
            let color = await db.Color.findAll();
            let category = await db.CategoryProduct.findAll();
            let size = await db.Size.findAll();

            return res.render('./products/new-product',{
                css: '/css/new-product.css',
                error : error.mapped(),
                oldBody: req.body,
                color,
                category,
                size
            })   
        }
        

        try {
            let files = req.files
            let size = req.body.size
            let color = req.body.color
        
            if (!Array.isArray(color)) {
                color = [req.body.color]
            }
            if (!Array.isArray(size)) {
                size = [req.body.size]
            }

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
            res.render('error');
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
    delete: async (req, res)=>{
        try {
            let {id} = req.params; 
            let producto = await db.Product.findByPk(id, {
                include: [
                    {association: 'image'},
                    {association: 'size'},
                    {association: 'color'}
                ]
            })
    
            res.render('./products/delete-product',{
                css: '/css/new-product.css',
                producto
            })
        } catch (error) {
            res.render('error');
        }
    },
    erase: async (req, res)=>{
        try {
            let {id} = req.params; 
            await db.Product.destroy(id)
            
            res.redirect('/');
        } catch (error) {
            res.render('error');
        }

    } 
};

module.exports = productController