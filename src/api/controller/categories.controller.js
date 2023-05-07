const db = require('../../database/models');

const apiCategoriesController = {
    getAll: async (req, res) => {
        try {
            let userCategories= await db.UserCategory.findAll({
                attributes: ['id', 'category'],
            })
            
            let productCategories= await db.CategoryProduct.findAll({
                attributes: ['id', 'category'],
            })

            
            res.status(200).json({
                status: 200,
                data: {
                    productCategories,
                    userCategories,
                }
            })
        } catch (error) {
            res.status(400).json({
                status: 400,
                data: error
            })
        }
    },
};

module.exports = apiCategoriesController