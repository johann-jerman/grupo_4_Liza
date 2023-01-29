const mainController = {
    home : (req, res) => {
        res.render('index',)
    },
    login : (req, res) => {
        res.render('login')
    },
    register : (req, res) => {
        res.render('register')
    },
    man : (req, res) => {
        res.render('man')
    },
    women : (req, res) => {
        res.render('women')
    },
    product : (req, res) => {
        res.render('product')
    },
    shoppingCart : (req, res) => {
        res.render('shopping-cart')
    },
};

module.exports = mainController