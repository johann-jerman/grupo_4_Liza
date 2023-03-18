module.exports = (sequelize,DataType) => {
    const alias = "User";

    const cols =  {
        id : {
            primaryKey : true,
            autoIncrement : true,
            type : DataType.INTERGER
        },
        name : {
            type : DataType.STRING(100),
            allowNull : false,
        },
    
        lastname : {
            type : DataType.STRING(100),
            allowNull : false,
        },

        password : {
            type : DataType.STRING(255),
            allowNull : false,
        },

        email : {
            type : DataType.STRING(100),
            allowNull : false,
        },
        
        image : {
            type : DataType.STRING(255),
            allowNull : false,
        },

      

    };
    
    const config =  {
        tableName : "users",
        timestamp : true,
        underscored : true,
        paranoid : true,
        created_at : "created_at",
        updated_at : "updated_at",
        deleted_at : "deleted_at",
    }

    const User = sequelize.define(alias,cols,config);

    
    return User;
}