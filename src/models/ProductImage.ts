import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";
import ProductImageAttributes from "../typings/ProductImage";

class ProductImage extends Model<ProductImageAttributes> implements ProductImageAttributes {
    public product_id!: number;
    public url!: string;
}

ProductImage.init({
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'product',
            key: 'id'
        }
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_image'
});

export default ProductImage;