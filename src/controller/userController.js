const {validationResult} = require('express-validator');
const User = require('../services/User');
const bcrypt = require('bcrypt');

const userController = {
    register : (req, res) => {
        res.render('./users/register',{
            css: '/css/register.css'
        })
    },
    registerProcess : (req, res) => {
        const error = validationResult(req)
        const body = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password,10),
            image: req.file? req.file.filename: "usuarioDefault.png"
        }
        
        if(!error.isEmpty()) {
            return res.render('users/register',{
                css: '/css/register.css', 
                error: error.mapped(),
                oldBody: req.body
            })  
        }

        User.createUser(body);
        return res.redirect('/user/register');
    },
    login : (req, res) => {
        res.render('./users/login',{
            css: '/css/register.css'
        })
    },
    loginPocess : (req, res) => {

    },
    logout : (req, res) => {

    },
    profile : (req, res) => {

    },
    admin: (req, res)=> {
        res.render('./users/admin',{
            css: '/css/admin.css'
        })
    }

    
};

module.exports = userController