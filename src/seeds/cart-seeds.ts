import Cart from "../models/Cart";
import CartAttributes from "../typings/Cart";

const data: CartAttributes[] = [];

async function seedCarts() {
    await Cart.bulkCreate(data);
}

export default seedCarts;