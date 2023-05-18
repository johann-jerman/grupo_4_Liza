function guessMiddleware (req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/user/login')
    }
    console.log('middleware');
    next()
}

module.exports = guessMiddleware