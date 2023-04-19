const db = require('../database/models')

module.exports = {
    edit: async (req, res) => {
        try {
            const {id} = req.params
            await db.Image.update(
                {
                    image: req.file.filename
                },
                {
                    where: {
                        id
                    }
                }
            )
            res.redirect('/')
        } catch (error) {
            res.render('error')
        }
    },
    delete: async (req, res)=>{
        try {
            await db.Image.destroy({
                where:{
                    id: req.params.id
                }
            })

            res.redirect('/')
        } catch (error) {
            res.render('error') 
        }
    }
}