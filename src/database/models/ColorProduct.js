'use stict';


module.exports = (sequelize, DataTypes) => {

    const ColorProduct = sequelize.define('ColorProduct', 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement : true,
                primaryKey: true
            },
            color_id: {
                type: DataTypes.INTEGER,
            },
            product_id: {
                type: DataTypes.INTEGER,
            }
        },
        {
            tablename: 'color_products',
            timestamps: true,
            paranoid: true,
            underscored: true,
            created_at : "created_at",
            updated_at : "updated_at",
            deleted_at : "deleted_at",
        }
    )
    

    return ColorProduct
}