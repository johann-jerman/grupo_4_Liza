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
        let invalidEmail = User.findByField('email', body.email)
        if(invalidEmail){
            return res.render('users/register',{
                css: '/css/register.css', 
                error: {
                    email: {
                        msg: 'El email ya existente'
                    }
                },
                oldBody: req.body
            })  
        }

        delete body.confirmPassword

        User.createUser(body);
        return res.redirect('/user/login');
    },
    login : (req, res) => {
        res.render('./users/login',{
            css: '/css/register.css'
        })
    },
    loginPocess : (req, res) => {
        let body = req.body
        let toLoggin = User.findByField('email', body.email)

        if (toLoggin) {
            let validPassword = bcrypt.compareSync(body.password, toLoggin.password)
            if (validPassword) {
                delete toLoggin.password
                req.session.isLogged = toLoggin
                return res.render('users/profile', {
                    css: null,
                })
            }
        }

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