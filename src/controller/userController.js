const {validationResult} = require('express-validator');
const User = require('../services/User');
const Admin = require('../services/Admin');
const bcrypt = require('bcrypt');
const db = require('../database/models')

const userController = {
    register : (req, res) => {
        res.render('./users/register',{
            css: '/css/register.css'
        })
    },
    // registerProcess : (req, res) => {
    //     const error = validationResult(req)
    //     const body = {
    //         ...req.body,
    //         password: bcrypt.hashSync(req.body.password,10),
    //         image: req.file? req.file.filename: "usuarioDefault.png"
    //     }
        
    //     if(!error.isEmpty()) {
    //         return res.render('users/register',{
    //             css: '/css/register.css', 
    //             error: error.mapped(),
    //             oldBody: req.body
    //         })  
    //     }
    //     let invalidEmail = User.findByField('email', body.email)
    //     if(invalidEmail){
    //         return res.render('users/register',{
    //             css: '/css/register.css', 
    //             error: {
    //                 email: {
    //                     msg: 'El email ya existente'
    //                 }
    //             },
    //             oldBody: req.body
    //         })  
    //     }

    //     delete body.confirmPassword

    //     User.createUser(body);
    //     return res.redirect('/user/login');
    // },
    
    registerProcess : async (req, res) => {
        const error = validationResult(req)
        
        console.log(error.mapped());

        if ( !error.isEmpty() ) {
            return res.render('users/register', {
                css: '/css/register.css', 
                error: error.mapped(),
                oldBody: req.body
            })
        }
        
        try {
            const userToRegist = {
                name: req.body.name,
                lastname: req.body.lastname,
                password: bcrypt.hashSync( req.body.password, 10),
                email: req.body.email,
                image: 'usuarioDefault.png',
                userCategory_id: req.body.category ? req.body.category : '1' 
            };
            
            const invalidEmail = await db.User.findOne({
                where: {
                    email : req.body.email
                }
            });

            if (invalidEmail) {
                return res.render('users/register', {
                    css: '/css/register.css', 
                    error: {
                        email: {
                            msg: 'El email ya existe'
                        }
                    },
                    oldBody: req.body
                })
            };

            await db.User.create(userToRegist, {
                include: 'userCategory'
            });

            res.redirect('/user/login');

        } catch (error) {
            res.json({
                error
            })
        }
    },
    
    

    login : (req, res) => {

        res.render('./users/login',{
            css: '/css/register.css'
        })
    },

    loginPocess : (req, res) => {
        let body = req.body;
        let error = validationResult(req);

        if (!error.isEmpty()) {
            return res.render('./users/login',{
                css: '/css/register.css',
                error: error.mapped(),
            })    
        }

        let toLoggin = User.findByField('email', body.email);
        let validPassword = bcrypt.compareSync(body.password, toLoggin.password);        
        
        if(toLoggin.status == 'admin'){
            req.session.admin = toLoggin

            return res.redirect('/user/admin')
        }

        if (toLoggin && validPassword) {

            delete toLoggin.password;
            req.session.userLogged = toLoggin;
                
                if (toLoggin.rememberme) {
                    res.cookie('userCookie', toLoggin, {maxage:1000*60*5})
                }

            return res.redirect('/user/profile');
        }
        let mensage = toLoggin? 'Password invalida' : 'Mail invalido';

        res.render('./users/login',{
            css: '/css/register.css',
            error: {
                campo : {
                    msg: mensage
                }
            }
        })

    },
    logout : (req, res) => {
        req.session.destroy()
        res.clearCookie('userCookie')
        res.redirect('/')

    },
    profile : (req, res) => {
        res.render('./users/profile', {
            css : null ,
            user : req.session.userLogged
        })
    },
    admin: (req, res)=> {
        let products = Admin.getAllProduct()
        
        res.render('./users/admin',{
            css: '/css/admin.css',
            products
        })
    },
    
    
};

module.exports = userController