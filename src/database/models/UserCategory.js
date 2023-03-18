module.exports = (sequelize,DataType) => {
    const alias = "UserCategory";

    const cols =  {
        id : {
            primaryKey : true,
            autoIncrement : true,
            type : DataType.INTERGER
        },

        category : {
            type : DataType.STRING(255),
            
        },
        
    };
    
    const config =  {
        tableName : "userCategory",
        timestamp : true,
        underscored : true,
        paranoid : true,
        created_at : "created_at",
        updated_at : "updated_at",
        deleted_at : "deleted_at",
    }

    const UserCategory = sequelize.define(alias,cols,config);

    User.associate = (models)=> {
        User.hasMany(models.UserCategory,{
            as : "categoryUser",
            foreingKey : "category_id",
            
        })
    }
    return UserCategory;
}