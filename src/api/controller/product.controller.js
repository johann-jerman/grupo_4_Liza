const db = require('../../database/models');

const apiProductController = {
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