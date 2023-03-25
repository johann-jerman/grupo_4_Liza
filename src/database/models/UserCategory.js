module.exports = (sequelize,DataType) => {
    const alias = "UserCategory";

    const cols =  {
        id : {
            primaryKey : true,
            autoIncrement : true,
            type : DataType.INTEGER
        },

        category : {
            type : DataType.STRING(255),
            
        },
        
    };
    
    const config =  {
        tableName : "usercategory",
        timestamp : true,
        underscored : true,
        paranoid : true,
        created_at : "created_at",
        updated_at : "updated_at",
        deleted_at : "deleted_at",
    }

    const UserCategory = sequelize.define(alias,cols,config);

    UserCategory.associate = (models)=> {
        UserCategory.hasMany(models.User,{
            as : "user",
            foreignKey : "userCategory_id",
        })
    }
    return UserCategory;
}