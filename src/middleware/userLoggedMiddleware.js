
function userLoggedMiddelware (req, res, next) {
    res.session.logged = false
    if (req.session && req.session.isLogged) {
        res.session.logged = true
        res.session.isLogged = res.session.isLogged
    }
    next()
} 

module.exports = userLoggedMiddelware