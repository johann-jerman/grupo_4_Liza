module.exports = (sequelize,DataType) => {
    const alias = "Image";

    const cols =  {
        id : {
            primaryKey : true,
            autoIncrement : true,
            type : DataType.INTEGER
        },

        image : {
            type : DataType.STRING(255),
            
        },
        
    };
    
    const config =  {
        tableName : "images",
        timestamp : true,
        underscored : true,
        paranoid : true,
        created_at : "created_at",
        updated_at : "updated_at",
        deleted_at : "deleted_at",
    }

    const Image = sequelize.define(alias,cols,config);

    Image.associate = (models)=> {
        Image.belongsToMany(models.Product,{
            as : "product",
            through: "image_products",
            foreignKey : "image_id",
            otherKey: "product_id"
        })
    }

    return Image;
}