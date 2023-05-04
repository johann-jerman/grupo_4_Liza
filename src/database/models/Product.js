module.exports = (sequelize,DataType) => {
    const Product = sequelize.define("Product",
        {
            id : {
                primaryKey : true,
                autoIncrement : true,
                type : DataType.INTEGER
            },
            name : {
                type : DataType.STRING(100),
                allowNull : false,
            },
            care : {
                type : DataType.TEXT,
                allowNull : true
            },
            description : {
                type : DataType.TEXT,
                allowNull : false,
            },
            price : {
                type : DataType.INTEGER,
                allowNull : false,
            },
            category_id: {
                type : DataType.INTEGER,
            },
            offer:{
                type : DataType.INTEGER,
            },
            stock:{
                type : DataType.INTEGER,
                allowNull : false,
            }
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
            as : "category",
            foreignKey : "category_id",
        })

        Product.belongsToMany(models.Size,{
            as : "size",
            through: "size_products",
            foreignKey : "product_id",
            otherKey: "size_id"
        })

        Product.belongsToMany(models.Image,{
            as : "image",
            through: "image_products",
            foreignKey : "product_id",
            otherKey: "image_id"
        })  
        
        Product.belongsToMany(models.Color,{
            as : "color",
            through: "color_products",
            foreignKey : "product_id",
            otherKey: "color_id"
        })
    }

    return Product;
}