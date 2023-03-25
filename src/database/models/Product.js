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
            category_product_id: {
                type : DataType.INTEGER,
            },
            color_id: {
                type : DataType.INTEGER,
            },
            size_id: {
                type : DataType.INTEGER,
            },
            image_id: {
                type : DataType.INTEGER,
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

    // Product.associate = (models)=> {
    //     Product.belongsTo(models.CategoryProduct,{
    //         as : "categoryProduct",
    //         foreingKey : "category_id",
            
    //     })
    // }

    return Product;
}