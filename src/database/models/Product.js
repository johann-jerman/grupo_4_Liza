module.exports = (sequelize,DataType) => {
    const Product = sequelize.define("Product",
        {
            id : {
                primaryKey : true,
                autoIncrement : true,
                type : DataType.INTERGER
            },
            name : {
                type : DataType.STRING(100),
                allowNull : false,
            },
            care : {
                type : DataType.TEXT,
                allowNull : false
            },
            description : {
                type : DataType.TEXT,
                allowNull : false,
            },
            price : {
                type : DataType.INTERGER,
                allowNull : false,
            },

        },
        {
            tableName : "products",
            timestamp : true,
            underscored : true,
            paranoid : true,
            created_at : "created_at",
            updated_at : "updated_at",
            deleted_at : "deleted_at",
        }
    );

    Product.associate = (models)=> {
        Product.belongsTo(models.CategoryProduct,{
            as : "categoryProduct",
            foreingKey : "category_id",
            
        })
    }

    return Product;
}