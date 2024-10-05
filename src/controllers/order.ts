import { Request, Response, NextFunction } from "express";
import { orderService } from "../services/order";
import AppError from "../structures/AppError";

async function checkoutSession(req: Request, res: Response, next: NextFunction) {
    try {
        const order = req.order;
        const cart = req.cart;
        if (!order || !cart) {
            return next(new AppError('Order or cart not found', 404, true));
        }
        const session = await orderService.checkoutSession(cart, order);
        if (!session || !session.url) {
            return next(new AppError('Failed to create checkout session', 500, true));
        }
        console.log(session.id);
        return res.status(200).json({ url: session.url });
    } catch (err) {
        next(err);
    }
}

async function getSessionStatus(req: Request, res: Response, next: NextFunction) {
    const sessionId = req.params.sessionId;
    try {
        const status = await orderService.getSessionStatus(sessionId);
        if (!status) {
            return next(new AppError('Session not found', 404, true));
        }

        return res.status(200).json({ status });
    } catch (err) {
        next(err);
    }
}

const orderController = {
    checkoutSession,
    getSessionStatus
};

export { orderController };