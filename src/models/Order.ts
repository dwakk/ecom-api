import { Model, DataTypes, CreationOptional } from "sequelize";
import sequelize from "../config/connection";
import OrderAttributes from "../typings/Order";

class Order extends Model<OrderAttributes> implements OrderAttributes {
    public id!: number;
    public account_id!: number;
    public total_price!: number;
    public cart_id!: number | null;
    public status!: "pending" | "completed";
    public createdAt?: Date;
    public updatedAt?: Date;
}

Order.init({
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
    },
    total_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'cart',
            key: 'id'
        }
    },
    status: {
        type: DataTypes.ENUM("pending", "completed"),
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'order'
});

export default Order;