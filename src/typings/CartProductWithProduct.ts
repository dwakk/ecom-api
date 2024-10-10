import CartProductAttributes from "./CartProduct";
import ProductAttributes from "./Product";

interface CartProductWithProductAttributes extends CartProductAttributes {
    product: ProductAttributes;
}

export default CartProductWithProductAttributes;