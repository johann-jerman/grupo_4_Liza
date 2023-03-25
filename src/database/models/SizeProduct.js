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
        tableName : "sizesproduct",
        timestamp : true,
        underscored : true,
        paranoid : true,
        created_at : "created_at",
        updated_at : "updated_at",
        deleted_at : "deleted_at",
    }

    const SizeProduct = sequelize.define(alias,cols,config);

    return SizeProduct;
}