import { Model, DataTypes, CreationOptional } from "sequelize";
import sequelize from "../config/connection";
import ProductAttributes from "../typings/Product";

class Product extends Model<ProductAttributes> implements ProductAttributes {
    public id!: number;
    public product_name!: string;
    public price!: number;
    public category_id!: number;
    public description!: string;
    public thumbnail!: string;
    public stock!: number;
    public reserved!: number;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
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
        },
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reserved: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
});

export default Product;