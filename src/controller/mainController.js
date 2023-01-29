const mainController = {
    home : (req, res) => {
        res.render('index',{
            css: './css/styles.css'
        })
    },
    login : (req, res) => {
        res.render('login',{
            css: './css/login.css'
        })
    },
    register : (req, res) => {
        res.render('register',{
            css: './css/register.css'
        })
    },
    man : (req, res) => {
        res.render('man',{
            css: './css/genre.css'
        })
    },
    women : (req, res) => {
        res.render('women',{
            css: './css/genre.css'
        })
    },
    product : (req, res) => {
        res.render('product',{
            css: './css/product.css'
        })
    },
    shoppingCart : (req, res) => {
        res.render('shopping-cart',{
            css: './css/shopping-cart.css'
        })
    },
};

module.exports = mainController