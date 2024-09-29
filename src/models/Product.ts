import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";
import ProductAttributes from "../typings/Product";

class Product extends Model<ProductAttributes> implements ProductAttributes {
    public id!: number;
    public product_name!: string;
    public price!: number;
    public category_id!: number;
    public description!: string;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
});

export default Product;