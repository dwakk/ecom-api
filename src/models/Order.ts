import { Model, DataTypes, CreationOptional } from "sequelize";
import sequelize from "../config/connection";
import OrderAttributes from "../typings/Order";

class Order extends Model<OrderAttributes> implements OrderAttributes {
    public id!: number;
    public user_id!: number;
    public status!: string;
    public total_price!: number;
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
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'account',
            key: 'id'
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending"
    },
    total_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'order'
});

export default Order;