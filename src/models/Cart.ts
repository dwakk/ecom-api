import { Model, DataTypes, CreationOptional } from "sequelize";
import sequelize from "../config/connection";
import CartAttributes from "../typings/Cart";

class Cart extends Model<CartAttributes> implements CartAttributes {
    public id!: number;
    public user_id!: number;
    public product_id!: number;
    public quantity!: number;
    public order_id?: number | undefined;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}


Cart.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'account',
            key: 'id'
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'product',
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'order',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart'
});

export default Cart;