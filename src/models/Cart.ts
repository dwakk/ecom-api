import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";
import CartAttributes from "../typings/Cart";

class Cart extends Model<CartAttributes> implements CartAttributes {
    public id!: number;
    public account_id!: number;
}

Cart.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'account',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart'
});

export default Cart;