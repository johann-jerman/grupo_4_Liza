const mainController = {
    home : (req, res) => {
        res.render('index',{
            css: './css/styles.css',
        })
    },
    login : (req, res) => {
        res.render('./users/login',{
            css: './css/login.css'
        })
    },
    register : (req, res) => {
        res.render('./users/register',{
            css: './css/register.css'
        })
    },
    man : (req, res) => {
        res.render('./products/man',{
            css: './css/genre.css'
        })
    },
    women : (req, res) => {
        res.render('./products/women',{
            css: './css/genre.css'
        })
    },
    product : (req, res) => {
        res.render('./products/product',{
            css: './css/product.css'
        })
    },
    shoppingCart : (req, res) => {
        res.render('./products/shopping-cart',{
            css: './css/shopping-cart.css'
        })
    },
};

module.exports = mainController