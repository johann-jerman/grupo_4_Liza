const db = require('../../database/models');

const apiCategoriesController = {
    getAll: async (req, res) => {
        try {
            let productCategories = db.CategoryProduct.findAll({
                attributes: ['id', 'category', 'created_at'],
            })
            let userCategories = db.UserCategory.findAll({
                attributes: ['id', 'category', 'created_at'],
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