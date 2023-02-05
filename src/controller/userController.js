const userController = {
    login : (req, res) => {
        res.render('./users/login',{
            css: '/css/login.css'
        })
    },
    register : (req, res) => {
        res.render('./users/register',{
            css: '/css/register.css'
        })
    },
    see: (req, res)=> {
        res.render('./users/admin',{
            css: '/css/admin.css'
        })
    }

    
};

module.exports = userController