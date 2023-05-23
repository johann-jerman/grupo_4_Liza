
function userLoggedMiddleware (req, res, next) {
    res.locals.logged = false;
    res.locals.isAdmin = false;
   
    if(req.session.admin){
        res.locals.isAdmin = true;
        res.locals.admin = req.session.admin;
    }

    if (req.cookies.userCookie) {
        req.session.userLogged = req.cookies.userCookie;
    }

    if (req.session.userLogged) {
        res.locals.logged = true;
        res.locals.userLogged = req.session.userLogged;
        console.log(res.locals.userLogged );
    }
    next()
} 

module.exports = userLoggedMiddleware