module.exports = (sequelize,DataType) => {
    const alias = "Category";

    const cols =  {
        id : {
            primaryKey : true,
            autoIncrement : true,
            type : DataType.INTERGER
        },

        category : {
            type : DataType.STRING(100),
            
        },
        
    };
    
    const config =  {
        tableName : "CategorysProduct",
        timestamp : true,
        underscored : true,
        paranoid : true,
        created_at : "created_at",
        updated_at : "updated_at",
        deleted_at : "deleted_at",
    }

    const CategoryProduct = sequelize.define(alias,cols,config);

    CategoryProduct.associate = (models)=> {
        CategoryProduct.hasMany(models.Product,{
            as : "product",
            foreingKey : "category_id",

        })
    }

    return CategoryProduct;
}