const db = require('../database/models')


const mainController = {
    home : (req, res) => {
        res.render('index',{
            css: '/css/styles.css',
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
            let produto= await db.Product.findAll({
                include: [{association: 'size'},{association: 'category'}, {association: 'image'},{association: 'color'}]
            })
            let size= await db.Size.findAll()
            let image= await db.Image.findAll()
            let category= await db.CategoryProduct.findAll()
            let color= await db.Color.findAll()
    
            res.json( {
                produto,
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
        
    }

};

module.exports = mainController