module.exports = (sequelize,datatype) => {
    const alias = "User";

    const cols =  {
        id : {
            type : datatype.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        name : {
            type : datatype.STRING(100),
            allowNull : false,
        },
    
        lastname : {
            type : datatype.STRING(100),
            allowNull : false,
        },

        password : {
            type : datatype.STRING(255),
            allowNull : false,
        },

        email : {
            type : datatype.STRING(255),
            allowNull : false,
        },
        
        image : {
            type : datatype.STRING(255),
            allowNull : true,
        },
        
        userCategory_id: {
            type: datatype.INTEGER
        }
          
      

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
    
    User.associate = (models)=> {
        User.belongsTo(models.UserCategory,{
            as : "userCategory",
            foreignKey : "userCategory_id",
        })
    }
    
    return User;
}