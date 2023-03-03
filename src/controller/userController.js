const {validationResult} = require('express-validator')

const userController = {
    login : (req, res) => {
        res.render('./users/login',{
            css: '/css/register.css'
        })
    },
    register : (req, res) => {
        res.render('./users/register',{
            css: '/css/register.css'
        })
    },
    registerProcess : (req, res) => {
        const error = validationResult(req)
        console.log(error);
        if(!error.isEmpty()) {
            return res.render('users/register',{
                css: '/css/register.css', 
                error: error.mapped(),
                oldBody: req.body
            })  
        }
    },
    see: (req, res)=> {
        res.render('./users/admin',{
            css: '/css/admin.css'
        })
    }

    
};

module.exports = userController