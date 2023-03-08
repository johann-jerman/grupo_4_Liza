const User = require('../services/User');

function userLoggedMiddleware (req, res, next) {
    res.locals.logged = false;
   
   const user = User.findByField('email', req.cookies.userCookie) 
    if (req.cookies.userCookie) {
        req.session.userLogged = user
    }

    if (req.session.userLogged) {
        res.locals.logged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next()
} 

module.exports = userLoggedMiddleware