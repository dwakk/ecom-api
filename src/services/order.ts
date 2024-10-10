import Stripe from "stripe";
import AppError from "../structures/AppError";
import { handleError } from "../utils/handleError";
import { cartService } from "./cart";
import { Cart, CartProduct, Order, OrderProduct } from "../models";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

async function checkoutSession(cart: Cart, order: Order): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    try {
        const allProducts = await cartService.getCartProducts(cart.id!);

        if (!allProducts || allProducts.length === 0) {
            throw new AppError('No products in cart', 400, true);
        }

        const lineItems = allProducts.map(cartProduct => {
            const { product, quantity } = cartProduct;
            if (!product || !quantity) {
                throw new AppError('Invalid cart product', 400, true);
            }

            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.product_name
                    },
                    unit_amount: product.price * 100
                },
                quantity
            };
        });

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.BASE_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
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

        const cart = await Cart.findByPk(order.cart_id!);
        if (!cart) {
            throw new AppError('Cart not found', 404, true);
        }

        const isCopied = await copyCartToOrder(cart, order);
        if (!isCopied) {
            throw new AppError('Failed to copy cart to order', 500, true);
        }


        await CartProduct.destroy({
            where: {
                cart_id: cart.id
            }
        });

        await cart.destroy();

        order.status = 'completed';
        order.cart_id = null;
        await order.save();

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

        const orderProductsData = cartProducts.map(cartProduct => ({
            order_id: order.id,
            product_id: cartProduct.product_id,
            quantity: cartProduct.quantity
        }));

        await OrderProduct.bulkCreate(orderProductsData);

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