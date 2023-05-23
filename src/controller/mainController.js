const db = require('../database/models')
const { Op } = require('sequelize')


const mainController = {
    home : async (req, res) => {
        const inOffer = await db.Product.findAll({
            include: [{association: 'image'}],
            where: {
                offer: {
                    [Op.ne]: 0
                }
            }
        }) 

        res.render('index',{
            css: '/css/styles.css',
            productsInOffer: inOffer
        })
    },
    prueba: async (req, res) => {
        try {
             let userCategory= await db.UserCategory.findAll(
                {
         include: 'user'
                 }
             )
             let user= await db.User.findAll(
                 {
                     include: 'userCategory'
                 }
            )
            let producto= await db.Product.findAll({
                include: [{association: 'size'},{association: 'category'}, {association: 'image'},{association: 'color'}]
            })
            let size= await db.Size.findAll()
            let image= await db.Image.findAll()
            let category= await db.CategoryProduct.findAll()
            let color= await db.Color.findAll()
            let colorProduct = await db.ColorProduct.findAll()
            let imageProduct = await db.ImageProduct.findAll()
            let SizeProduct = await db.SizeProduct.findAll()
    
            res.json( {
                colorProduct,
                imageProduct,
                SizeProduct,
                producto,
                user,
                userCategory,
                category,
                color,
                size,
                image
            })
            
        } catch (error) {
            res.json({
                error
            })
        }
        
    },
    contactanos: (req, res) => {
        res.render ("contactanos",{
            css: '/css/styles.css'
        })
    }
    



};

module.exports = mainController