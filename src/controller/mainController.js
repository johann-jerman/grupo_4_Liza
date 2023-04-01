const db = require('../database/models')


const mainController = {
    home : (req, res) => {
        res.render('index',{
            css: '/css/styles.css',
        })
    },
    prueba: async (req, res) => {
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
        let produto= await db.Product.findAll()
        let size= await db.Size.findAll()
        let image= await db.Image.findAll()
        let category= await db.CategoryProduct.findAll()
        let color= await db.Color.findAll()

        console.log(user);
        res.json( {
            user,
            userCategory,
            produto,
            category,
            color,
            size,
            image
        })
    }

};

module.exports = mainController