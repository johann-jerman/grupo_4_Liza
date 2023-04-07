'use stict';


module.exports = (sequelize, DataTypes) => {

    const SizeProduct = sequelize.define('SizeProduct', 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement : true,
                primaryKey: true
            },
            size_id: {
                type: DataTypes.INTEGER,
            },
            product_id: {
                type: DataTypes.INTEGER,
            }
        },
        {
            tablename: 'size_products',
            timestamps: true,
            paranoid: true,
            underscored: true,
            created_at : "created_at",
            updated_at : "updated_at",
            deleted_at : "deleted_at",
        }
    )
    

    return SizeProduct
}