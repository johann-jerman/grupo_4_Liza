const fs = require('fs');
const path = require('path');
const {validationResult} = require("express-validator");
const db = require('../database/models');
const { Op } = require('sequelize')


const productController = {
    //muestra de productos man y woman
    man : async (req, res) => {
        try {  
            let products = await db.Product.findAll({
                attributes: ['id', 'price', 'description', 'name'],
                include: [ 
                    {
                        association: 'image',
                        attributes:['id', 'image']
                    }
                ],
                where : {
                    category_id : 1
                }
            })
            

            res.render('./products/man',{
                css: '/css/genre.css',
                products, 
            })
            
        }catch (error) {
            res.render("error")
        }
     
    },
    women : async (req, res) => {
        try {  
            let products = await db.Product.findAll({
                include: [{association: 'image'}],
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
            const inOffer = await db.Product.findAll({
                include: [{association: 'image'}],
                where: {
                    offer: {
                        [Op.ne]: 0
                    }
                }
            }) 
    
            res.render('./products/detail',{
                css: '/css/product.css',
                productsInOffer: inOffer,
                producto
            })
        } catch (error) {
            res.render('error');
        }
    },
    //carrito de compras
    shoppingCart : (req, res) => {
        res.render('./products/shopping-cart2',{
            css: '/css/carrito-styles.css'
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
            console.log(error);
            res.json(error);
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
        // let productExist = await db.Product.finaAll({
        //     where: {
        //         name: req.body.name
        //     }
        // })

        // if (productExist) {
        //     let color = await db.Color.findAll();
        //     let category = await db.CategoryProduct.findAll();
        //     let size = await db.Size.findAll();

        //     return res.render('./products/new-product',{
        //         css: '/css/new-product.css',
        //         error : {
        //             name: {
        //                 msg: 'no pueden existir 2 campos iguales'
        //             }
        //         },
        //         oldBody: req.body,
        //         color,
        //         category,
        //         size
        //     })   
        // }

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
                offer:req.body.offer,
                stock:req.body.stock,
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
            console.log(error);
            res.json(error);
        }
    },
    //edicion de producto
    edit: async (req, res)=>{
        try {
            const {id} = req.params;
            const producto = await db.Product.findByPk(id, {
                include: [{association: 'image'}]
            });
            let color = await db.Color.findAll();
            let category = await db.CategoryProduct.findAll();
            let size = await db.Size.findAll();

            res.render('./products/edit-product',{
                css: '/css/new-product.css',
                producto,
                color,
                category,
                size
            })
        } catch (error) {
            // console.log(error);
            res.json({
                error
            })
        }
    },
    update: async (req, res)=>{
        try {
            let {id} = req.params;
            let editProduct = await db.Product.update(
                {
                    name:req.body.name,
                    description:req.body.description,
                    price:req.body.price,
                    category_id:req.body.category,
                },
                {
                    where: {
                        id
                    }
                }
            )
            let {size} = req.body 
            if (!Array.isArray(size)) {
                size = [req.body.size]
            }
            let sizeToUpdate = size.map(size => {
                return {
                    size_id : parseInt(size),
                    product_id : parseInt(id)
                }
            })

            res.redirect('/product/edit/' + id)
            // res.redirect('/product/detail/' + id)
        } catch (error) {
            // console.log(error);
            res.json({
                error
            })
        }
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
            await db.Product.destroy({
                where: {
                    id
                }
            })
            
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.json(error);
        }

    } 
};

module.exports = productController