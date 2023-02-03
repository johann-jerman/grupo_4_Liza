const productController = {
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
    create: (req, res)=> {
        res.render('./product/newProduct',{
            css: './css/newProduct.css'
        })
    }
};

module.exports = productController