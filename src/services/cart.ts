import { Cart, CartProduct, Product } from "../models";
import AppError from "../structures/AppError";
import CartProductWithProductAttributes from "../typings/CartProductWithProduct";
import { handleError } from "../utils/handleError";

async function getCartProducts(id: number): Promise<CartProductWithProductAttributes[]> {
    try {
        const cart = await Cart.findByPk(id, {
            include: {
                model: Product
            }
        });

        if (!cart) {
            throw new AppError('Cart not found', 404, true);
        }

        const cartProducts = await CartProduct.findAll({
            where: { cart_id: cart.id },
            include: [{ model: Product, as: 'product' }]
        });
        return cartProducts as unknown as CartProductWithProductAttributes[];
    } catch (err) {
        throw handleError(err);
    }
}


async function getSingleCartProduct(cartId: number, productId: number): Promise<CartProductWithProductAttributes> {
    try {
        const cartProduct = await CartProduct.findOne({ where: { cart_id: cartId, product_id: productId }, include: [{ model: Product, as: 'product' }] });
        if (!cartProduct) {
            throw new AppError('Cart product not found', 404, true);
        }
        return cartProduct as unknown as CartProductWithProductAttributes;
    } catch (err) {
        throw handleError(err);
    }
}

async function addProductToCart(cart: Cart, productId: number, quantity: number): Promise<CartProductWithProductAttributes[]> {
    try {
        const product = await Product.findByPk(productId);
        if (!product) {
            throw new AppError('Product not found', 404, true);
        }

        const [cartProduct, created] = await CartProduct.findOrCreate({
            where: {
                cart_id: cart.id,
                product_id: productId
            },
            defaults: {
                cart_id: cart.id,
                product_id: productId,
                quantity: quantity
            }
        });
        if (!created) {
            cartProduct.quantity += quantity;
            await cartProduct.save();
        }

        const cartProducts = await getCartProducts(cart.id);
        return cartProducts;
    } catch (err) {
        throw handleError(err);
    }
}


async function deleteProductFromCart(cart: Cart, productId: number): Promise<true> {
    try {
        await CartProduct.destroy({
            where: {
                cart_id: cart.id,
                product_id: productId
            }
        });
        return true;
    } catch (err) {
        throw handleError(err);
    }
}

async function clearCart(cart: Cart): Promise<true> {
    try {
        await CartProduct.destroy({
            where: {
                cart_id: cart.id
            }
        });
        return true;
    } catch (err) {
        throw handleError(err);
    }
}

async function removeQuantity(cart: Cart, productId: number, quantity: number): Promise<CartProductWithProductAttributes[]> {
    try {
        const cartProduct = await CartProduct.findOne({
            where: {
                cart_id: cart.id,
                product_id: productId
            }
        });
        if (!cartProduct) {
            throw new AppError('Cart product not found', 404, true);
        }
        if (cartProduct.quantity <= quantity) {
            throw new AppError('Quantity must be strictly greater than the current quantity', 400, true);
        }
        cartProduct.quantity -= quantity;
        await cartProduct.save();
        const cartProducts = await getCartProducts(cart.id);
        return cartProducts;
    } catch (err) {
        throw handleError(err);
    }
}

async function getTotalPrice(cart: Cart): Promise<number> {
    try {
        const cartProducts = await getCartProducts(cart.id);
        let totalPrice = 0;
        for (const cartProduct of cartProducts) {
            totalPrice += cartProduct.product.price * cartProduct.quantity;
        }
        return totalPrice;
    } catch (err) {
        throw handleError(err);
    }
}

const cartService = {
    getCartProducts,
    addProductToCart,
    deleteProductFromCart,
    clearCart,
    removeQuantity,
    getTotalPrice,
    getSingleCartProduct
};

export { cartService };