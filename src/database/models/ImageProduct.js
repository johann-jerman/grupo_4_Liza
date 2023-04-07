'use stict';


module.exports = (sequelize, DataTypes) => {

    const ImageProduct = sequelize.define('ImageProduct', 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement : true,
                primaryKey: true
            },
            image_id: {
                type: DataTypes.INTEGER,
            },
            product_id: {
                type: DataTypes.INTEGER,
            }
        },
        {
            tablename: 'image_products',
            timestamps: true,
            paranoid: true,
            underscored: true,
            created_at : "created_at",
            updated_at : "updated_at",
            deleted_at : "deleted_at",
        }
    )
    

    return ImageProduct
}