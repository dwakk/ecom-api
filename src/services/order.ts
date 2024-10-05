import Stripe from "stripe";
import AppError from "../structures/AppError";
import { handleError } from "../utils/handleError";
import { cartService } from "./cart";
import { productService } from "./product";
import Cart from "../models/Cart";
import Order from "../models/Order";
import Product from "../models/Product";
import OrderProduct from '../models/OrderProduct';
import CartProduct from "../models/CartProduct";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

async function checkoutSession(cart: Cart, order: Order): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    try {
        const cartProducts = await cartService.getCartProducts(cart.id!);

        if (!cartProducts || cartProducts.length === 0) {
            throw new AppError('No products in cart', 400, true);
        }

        const allProducts: Product[] = [];
        for (const cartProduct of cartProducts) {
            const product = await productService.getProductById(cartProduct.product_id);
            if (!product) {
                throw new AppError('Product not found', 404, true);
            }
            allProducts.push(product);
        }

        const lineItems = allProducts.map(product => {
            const quantity = cartProducts.find(cartProduct => cartProduct.product_id === product.id)?.quantity;

            if (quantity == null) {
                throw new AppError('Product quantity not found', 400, true);
            }

            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.product_name
                    },
                    unit_amount: product.price * 100
                },
                quantity: quantity
            };
        });

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.BASE_URL}/order/success`,
            cancel_url: `${process.env.BASE_URL}/order/cancel`,
            metadata: {
                order_id: order.id
            }
        });

        if (!session) {
            throw new AppError('Failed to create checkout session', 500, true);
        }

        return session;

    } catch (err) {
        throw handleError(err);
    }
}

async function getSessionStatus(orderId: string): Promise<{ status: string; }> {
    try {
        const session = await stripe.checkout.sessions.retrieve(orderId);
        if (!session) {
            throw new AppError('Session not found', 404, true);
        }

        if (session.payment_status === 'paid') {
            const id = session.metadata!.order_id;
            const isCompleted = await completeOrder(id);
            if (!isCompleted) {
                throw new AppError('Failed to complete order', 500, true);
            }
            return { status: "paid" };
        } else {
            return { status: session.payment_status };
        }
    } catch (err) {
        throw handleError(err);
    }
}

async function completeOrder(orderId: string): Promise<true> {
    try {
        const order = await Order.findByPk(orderId);
        if (!order) {
            throw new AppError('Order not found', 404, true);
        }
        order.status = 'completed';
        await order.save();

        const cartId = order.cart_id;
        const cart = await Cart.findByPk(cartId!);
        if (!cart) {
            throw new AppError('Cart not found', 404, true);
        }

        const isCopied = await copyCartToOrder(cart, order);
        if (!isCopied) {
            throw new AppError('Failed to copy cart to order', 500, true);
        }

        order.cart_id = null;
        await order.save();

        await CartProduct.destroy({
            where: {
                cart_id: cartId!
            }
        });

        await cart.destroy();

        return true;
    } catch (err) {
        throw handleError(err);
    }
}

async function copyCartToOrder(cart: Cart, order: Order): Promise<true> {
    try {
        const cartProducts = await cartService.getCartProducts(cart.id!);
        if (!cartProducts || cartProducts.length === 0) {
            throw new AppError('No products in cart', 400, true);
        }

        for (const cartProduct of cartProducts) {
            const product = await OrderProduct.create({
                order_id: order.id,
                product_id: cartProduct.product_id,
                quantity: cartProduct.quantity
            });

            if (!product) {
                throw new AppError('Failed to create order product', 500, true);
            }
        }

        return true;
    } catch (err) {
        throw handleError(err);
    }
}


const orderService = {
    checkoutSession,
    getSessionStatus,
    copyCartToOrder
};

export { orderService };