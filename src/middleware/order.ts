import { Request, Response, NextFunction } from "express";
import AppError from "../structures/AppError";
import Order from "../models/Order";
import { cartService } from "../services/cart";
import Product from "../models/Product";
import { productService } from "../services/product";
import CartProduct from "../models/CartProduct";
import { orderService } from "../services/order";

export async function setOrder(req: Request, res: Response, next: NextFunction) {
    try {
        const account = req.account;
        if (!account) {
            return next(new AppError('Account not found', 404, true));
        }
        const cart = req.cart;
        if (!cart) {
            return next(new AppError('Cart not found', 404, true));
        }

        const cartProducts = await cartService.getCartProducts(cart.id);
        if (!cartProducts || cartProducts.length === 0) {
            return next(new AppError('No products in cart', 400, true));
        }

        const totalPrice = await cartService.getTotalPrice(cart);

        const orderDetails = {
            account_id: account.id,
            cart_id: cart.id,
            total_price: totalPrice,
            status: 'pending'
        } as Order;

        const order = await Order.create(orderDetails);
        if (!order) {
            return next(new AppError('Failed to create order', 500, true));
        }
        req.order = order;

        const allProducts: CartProduct[] = [];
        for (const cartProduct of cartProducts) {
            const product = await cartService.getSingleCartProduct(cart.id, cartProduct.product_id);
            if (!product) {
                return next(new AppError('Product not found', 404, true));
            }
            product.order_id = order.id;
            await product.save();
            allProducts.push(product);
        }

        next();

    } catch (err) {
        next(err);
    }
}