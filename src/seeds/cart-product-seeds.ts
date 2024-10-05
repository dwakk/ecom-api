import CartProduct from "../models/CartProduct";
import CartProductAttributes from "../typings/CartProduct";

const data: CartProductAttributes[] = [];

async function seedCartProducts() {
    await CartProduct.bulkCreate(data);
}

export default seedCartProducts;