import Cart from "../models/Cart";
import CartAttributes from "../typings/Cart";

const data: CartAttributes[] = [
    {
        id: 1,
        user_id: 1,
        product_id: 1,
        quantity: 1
    },
    {
        id: 2,
        user_id: 1,
        product_id: 2,
        quantity: 1,
        order_id: 1
    },
    {
        id: 3,
        user_id: 1,
        product_id: 3,
        quantity: 1,
        order_id: 1
    },
    {
        id: 4,
        user_id: 1,
        product_id: 4,
        quantity: 1,
        order_id: 1
    }
];

async function seedCarts() {
    await Cart.bulkCreate(data);
}

export default seedCarts;