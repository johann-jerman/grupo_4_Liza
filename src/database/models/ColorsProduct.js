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
        tableName : "colorsproduct",
        timestamp : true,
        underscored : true,
        paranoid : true,
        created_at : "created_at",
        updated_at : "updated_at",
        deleted_at : "deleted_at",
    }

    const ColorsProduct = sequelize.define(alias,cols,config);

    return ColorsProduct;
}