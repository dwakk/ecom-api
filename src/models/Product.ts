import { Model, DataTypes, CreationOptional } from "sequelize";
import sequelize from "../config/connection";
import ProductAttributes from "../typings/Product";

class Product extends Model<ProductAttributes> implements ProductAttributes {
    public id!: number;
    public product_name!: string;
    public price!: number;
    public category_id!: number;
    public description!: string;

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
        get() {
            const rawValue = this.getDataValue('price');
            return typeof rawValue === 'string' ? parseFloat(rawValue) : rawValue;
        },
        set(value: string) {
            this.setDataValue('price', parseFloat(value));
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
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
});

export default Product;