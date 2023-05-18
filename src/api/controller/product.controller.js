const db = require('../../database/models');

const apiProductController = {
    getAll: async (req, res) => {
        try {
            let products = await db.Product.findAll({
                attributes: ['id', 'name', 'price', 'stock', 'offer', 'description', 'care'],
                include: [
                    {
                        association: 'image',
                        attributes:['id', 'image']
                    },
                    {
                        association: 'size',
                        attributes:['id', 'size']
                    },
                    {
                        association: 'color',
                        attributes:['id', 'color']
                    },
                    {
                        association: 'category',
                        attributes:['id', 'category']
                    },
                ]
            })

            res.status(200).json({
                status: 200,
                total: products.length,
                data: products,
            })
        } catch (error) {
            res.status(400).json({
                status: 400,
                data: error
            })
        }
    },
    getLast: async (req, res)=> {
        try {
            let product = await db.Product.findOne({
                attributes: ['id', 'name', 'price', 'stock', 'offer', 'description', 'care'],
                // order: [
                //     ['created_at', 'DESC']
                // ],
                include: [
                    {
                        association: 'image',
                        attributes:['id', 'image']
                    },
                ]
            })

            res.status(200).json({
                status: 200,
                data: product
            })
        } catch (error) {
            res.status(400).json({
                status: 400,
                data: error,
                a: 'esto es un error'
            })
        }
    },
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

    },
    category: async(req, res) => {
        try {
            let categoryProducts = await db.CategoryProduct.findAll({
                include: [
                    {
                        association: 'product',
                        attributes: ['id', 'name'],
                        order: [
                            ['name', 'ASC']
                        ]
                    }
                ]
            }) 
            res.json({
                categoryProducts
            })
        } catch (error) {
            console.log(error);
            res.json({error})
        }
    }

};

module.exports = apiProductController