import Order from "../models/Order";
import OrderAttributes from "../typings/Order";

const data: OrderAttributes[] = [];

async function seedOrders() {
    await Order.bulkCreate(data);
}

export default seedOrders;