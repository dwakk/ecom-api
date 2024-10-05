import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";
import OrderProductAttributes from "../typings/OrderProduct";

class OrderProduct extends Model<OrderProductAttributes> implements OrderProductAttributes {
    public order_id!: number;
    public product_id!: number;
    public quantity!: number;
}

OrderProduct.init(
    {
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "order",
                key: "id"
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "order_product",
    }
);

export default OrderProduct;