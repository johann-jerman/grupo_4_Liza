const db = require('../../database/models');

const apiProductController = {
    detail :async(req, res) => {
        try {
            let id = req.params.id
            let producto = await db.Product.findByPk(id, {
                include: [
                    {association: 'image'},
                    {association: 'size'},
                    {association: 'color'}
                ]
            })
            console.log(producto);
            res.status(200).json({
                status : 200,
                data: producto
            })
        } catch (error) {
            res.json({
                status: 400,
                error
            });
        }
    },
    erase: async (req, res)=>{
        try {
            console.log('estoy aca');
            let {id} = req.params; 
            await db.Product.destroy({
                where: {
                    id
                }
            })
            
            res.status(200).json({
                status: 200,
                data: true
            });
        } catch (error) {
            console.log(error);
            res.json(error);
        }

    } 
};

module.exports = apiProductController