module.exports = (sequelize,DataType) => {
    const alias = "Size";

    const cols =  {
        id : {
            primaryKey : true,
            autoIncrement : true,
            type : DataType.INTEGER
        },

        size : {
            type : DataType.STRING(100),
            
        },
        
    };
    
    const config =  {
        tableName : "sizes",
        timestamp : true,
        underscored : true,
        paranoid : true,
        created_at : "created_at",
        updated_at : "updated_at",
        deleted_at : "deleted_at",
    }

    const Size = sequelize.define(alias,cols,config);

    Size.associate = (models)=> {
        Size.belongsToMany(models.Product,{
            as : "product",
            through: "size_products",
            foreignKey : "size_id",
            otherKey: "product_id"
        })
    }

    return Size;
}