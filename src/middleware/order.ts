import { Request, Response, NextFunction } from "express";
import AppError from "../structures/AppError";
import { cartService } from "../services/cart";
import { Order } from "../models";

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

        const order = await Order.create({
            account_id: account.id,
            cart_id: cart.id,
            total_price: totalPrice,
            status: 'pending'
        });

        req.order = order;

        next();

    } catch (err) {
        next(err);
    }
}