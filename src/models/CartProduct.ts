import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";
import CartProductAttributes from "../typings/CartProduct";

class CartProduct extends Model<CartProductAttributes> implements CartProductAttributes {
    public cart_id!: number;
    public product_id!: number;
    public order_id?: number | undefined;
    public quantity!: number;
}

CartProduct.init({
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cart',
            key: 'id'
        },
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'product',
            key: 'id'
        },
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart_product'
});

export default CartProduct;