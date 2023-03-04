
function userLoggedMiddleware (req, res, next) {
    res.locals.logged = false;

    if (req.session.userLogged) {
        res.locals.logged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next()
} 

module.exports = userLoggedMiddleware