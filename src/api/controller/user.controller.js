require('dotenv').config()
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { User } = require('../../database/models');
const jwt = require('jsonwebtoken');
const { json } = require('sequelize');

const apiUserController = { 
    getAll: async (req, res) => {
        try {
            let users = await User.findAll({
                attributes: ['id', 'name', 'lastname', 'email', 'image', 'created_at'],
                order: [
                    ['created_at', 'DESC']
                ],
                include: [
                    {
                        association: 'userCategory',
                        attributes:['id', 'category']
                    },
                ]
            })

            res.status(200).json({
                status: 200,
                total: users.length,
                data: users
            })
        } catch (error) {
            res.status(400).json({
                status: 400,
                data: error,
                a: 'esto es un error'
            })  
        }
    },
    getLast: async (req, res)=> {
        try {
            let user = await User.findOne({
                attributes: ['id', 'name', 'lastname', 'email', 'image', 'created_at'],
                order: [
                    ['created_at', 'DESC']
                ]
            })

            res.status(200).json({
                status: 200,
                data: user
            })
        } catch (error) {
            res.status(400).json({
                status: 400,
                data: error,
                a: 'esto es un error'
            })
        }
    },
    getByPk : async (req, res) => {
        try {
            let {id} = req.params
            let user = await User.findByPk(id, {
                attributes: ['id', 'image', 'name', 'lastname', 'email', 'created_at']
            })

            res.status(200).json({
                status: 200,
                data: user
            })
        } catch (error) {
            res.status(400).json({
                status: 400,
                data: error,
            })  
        }
    },
    registerProcess : async (req, res) => {
        const error = validationResult(req);
        
        if ( !error.isEmpty() ) {
            return res.status(400).json({
                status: 400,
                error: error.mapped(),
                oldBody: req.body
            });
        };

        try {
            const userToRegist = {
                name: req.body.name,
                lastname: req.body.lastname,
                password: await bcrypt.hash( req.body.password, 10),
                email: req.body.email,
                image: 'usuarioDefault.png',
                userCategory_id: req.body.category ? req.body.category : '1' 
            };
            
            const invalidEmail = await User.findOne({
                where: {
                    email : req.body.email
                }
            });

            if (invalidEmail) {
                return res.status(404).json({
                    error: {
                        email: {
                            msg: 'El email ya existe'
                        }
                    },
                    oldBody: req.body
                });
            };

            const user = await User.create(userToRegist, {
                include: 'userCategory'
            });

            const token = jwt.sign(user.id, process.env.TOKEN_SECRET, {
                algorithm: 'HS256',
            })

            res.status(200).json({
                status: 200,
                data: user,
                token
            });

        } catch (error) {
            res.status(400).json({
                error
            });
        }
    },
    loginPocess : async (req, res) => {
        const error = validationResult(req);
        
        if ( !error.isEmpty() ) {
            return res.status(400).json({
                status: 400,
                error: error.mapped(),
            });
        };
        
        try {
            
            let userToLogin = await User.findOne({
                where:{
                    email: req.body.email,
                },
                attributes: [
                    'id',
                    'name',
                    'lastname',
                    'password',
                    'email',
                    'image',
                    'userCategory_id',
                ]
            });

            if (!userToLogin) {

                return res.status(400).json({
                    status: 400,
                    error: {
                        email: {
                            msg: 'Email no resgistrado'
                        }
                    },
                });
            };

            const confirmPassword = await bcrypt.compare(req.body.password, userToLogin.password );

            if (!confirmPassword) {

                return res.status(400).json({
                    status: 400,
                    error: {
                        password: {
                            msg: 'Contaseña incorrecta'
                        }
                    },
                });
            };

            const token = jwt.sign(userToLogin.id, process.env.TOKEN_SECRET, {
                algorithm: 'HS256',
            });
            
            if (userToLogin.userCategory_id === 2) {
                delete userToLogin.dataValues.password;

                req.session.admin = userToLogin.dataValues;
            
                return res.status(200).json({
                    status: 200,
                    user: req.session.admin,
                    token
                });
            };

            if (userToLogin.userCategory_id === 1) {
                delete userToLogin.dataValues.password;
    
                req.session.userLogged = userToLogin.dataValues;

                if(req.body.rememberme){

                    res.cookie('userCookie', userToLogin.dataValues, {maxage: 1000*60*60});
                };

                res.status(200).json({
                    status: 200,
                    user: req.session.userLogged,
                    token
                });
            };
        } catch (error) {
            console.log(error);
            res.json({
                status: 400,
                error
            });
        }
    },

    logout : (req, res) => {
        req.session.destroy();
        res.clearCookie('userCookie');
        res.status(200).json({
            status: 200,
            data: 'session finished succesful'
        });
    },

    profile : (req, res) => {
        try {
            const auth= req.headers.auth

            const validAuth = jwt.verify(auth, process.env.TOKEN_SECRET)

            if(!validAuth) {
                return res.status(400).json({
                    status: 400, 
                    data: 'token invalido'
                })
            }

            res.status(200).json({
                status: 200,
                userData : req.session.userLogged
            });
        } catch (error) {
            res.status(400).json({
                error
            })
        }
    },
    // esto se hace en el 8 sprint 
    admin: (req, res)=> {
        let products = getAllProduct();
        
        res.render('./users/admin',{
            css: '/css/admin.css',
            products
        });
    },
    
    
};

module.exports = apiUserController