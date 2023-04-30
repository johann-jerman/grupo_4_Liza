const db = require('../../database/models')


const favoriteController = {
    favoriteAdd: (req, res)=>{
        try {
            res.json({
                data: 'finciona dedsde fav'
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                error       
            })     
        }
    },
    favoriteRemove: (req, res)=>{
        try {
            res.json({
                data: 'finciona dedsde fav remove'
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                error       
            })
        }
    },
};

module.exports = favoriteController