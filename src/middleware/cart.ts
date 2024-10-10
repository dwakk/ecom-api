import { Request, Response, NextFunction } from "express";
import { Cart } from "../models";
import AppError from "../structures/AppError";

export async function setCart(req: Request, res: Response, next: NextFunction) {
    try {
        const account = req.account;
        if (!account) {
            return next(new AppError('Account not found', 404, true));
        }

        const cart = await Cart.findOne({
            where: { account_id: account.id }
        });

        if (!cart) {
            const newCart = await Cart.create({ account_id: account.id });
            req.cart = newCart;
        } else {
            req.cart = cart;
        }

        next();
    } catch (err) {
        next(err);
    }
}
