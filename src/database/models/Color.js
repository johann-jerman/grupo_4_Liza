module.exports = (sequelize,DataType) => {
    const alias = "Color";

    const cols =  {
        id : {
            primaryKey : true,
            autoIncrement : true,
            type : DataType.INTEGER
        },

        color : {
            type : DataType.STRING(100),
            
        },
        
    };
    
    const config =  {
        tableName : "colors",
        timestamp : true,
        underscored : true,
        paranoid : true,
        created_at : "created_at",
        updated_at : "updated_at",
        deleted_at : "deleted_at",
    }

    const Colors = sequelize.define(alias,cols,config);

    Colors.associate = (models)=> {
        Colors.belongsToMany(models.Product,{
            as : "product",
            through: "color_products",
            foreignKey : "color_id",
            otherKey: "product_id"
        })
    }

    return Colors;
}