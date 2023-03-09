const User = require('../services/User');

function userLoggedMiddleware (req, res, next) {
    res.locals.logged = false;
    res.locals.isAdmin = false;
   
    if(req.session.admin){
        res.locals.isAdmin = true;
        res.locals.admin = req.session.admin
    }

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