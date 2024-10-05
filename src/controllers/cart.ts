import { Request, Response, NextFunction } from "express";
import Cart from "../models/Cart";
import { cartService } from "../services/cart";
import AppError from "../structures/AppError";

async function getCartProducts(req: Request, res: Response, next: NextFunction) {
    try {
        const cart = req.cart;
        if (!cart) {
            return next(new AppError('Cart not found', 404, true));
        }
        const cartProducts = await cartService.getCartProducts(cart.id);
        return res.status(200).json(cartProducts);
    } catch (err) {
        next(err);
    }
}

async function addToCart(req: Request, res: Response, next: NextFunction) {
    try {
        const cart = req.cart;
        if (!cart) {
            return next(new AppError('Cart not found', 404, true));
        }
        const { product_id, quantity } = req.body;
        if (!product_id || !quantity) {
            return next(new AppError('Product ID and quantity are required', 400, true));
        }

        const parsedId = parseInt(product_id);
        const parsedQuantity = parseInt(quantity);
        if (isNaN(parsedId) || isNaN(parsedQuantity)) {
            return next(new AppError('Product ID or quantity must be a number', 400, true));
        }
        if (parsedId < 1 || parsedQuantity < 1) {
            return next(new AppError('Product ID or quantity must be greater than 0', 400, true));
        }

        const updatedCart = await cartService.addProductToCart(cart, product_id, quantity);

        return res.status(200).json(updatedCart);
    } catch (err) {
        next(err);
    }
}

async function removeFromCart(req: Request, res: Response, next: NextFunction) {
    try {
        const cart = req.cart;
        if (!cart) {
            return next(new AppError('Cart not found', 404, true));
        }

        const { id } = req.params;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return next(new AppError('Product ID must be a number', 400, true));
        }
        if (parsedId < 1) {
            return next(new AppError('Product ID must be greater than 0', 400, true));
        }

        const updatedCart = await cartService.deleteProductFromCart(cart, parsedId);
        return res.status(200).json(updatedCart);
    } catch (err) {
        next(err);
    }
}

async function clearCart(req: Request, res: Response, next: NextFunction) {
    try {
        const cart = req.cart;
        if (!cart) {
            return next(new AppError('Cart not found', 404, true));
        }
        const updatedCart = await cartService.clearCart(cart);
        return res.status(200).json(updatedCart);
    } catch (err) {
        next(err);
    }
}

async function removeQuantity(req: Request, res: Response, next: NextFunction) {
    try {
        const cart = req.cart;
        if (!cart) {
            return next(new AppError('Cart not found', 404, true));
        }
        const { product_id, quantity } = req.body;
        if (!product_id || !quantity) {
            return next(new AppError('Product ID and quantity are required', 400, true));
        }
        const parsedId = parseInt(product_id);
        const parsedQuantity = parseInt(quantity);
        if (isNaN(parsedId) || isNaN(parsedQuantity)) {
            return next(new AppError('Product ID or quantity must be a number', 400, true));
        }
        if (parsedId < 1 || parsedQuantity < 1) {
            return next(new AppError('Product ID or quantity must be greater than 0', 400, true));
        }

        const updatedCart = await cartService.removeQuantity(cart, product_id, quantity);
        return res.status(200).json(updatedCart);
    } catch (err) {
        next(err);
    }
}

async function getTotalPrice(req: Request, res: Response, next: NextFunction) {
    try {
        const cart = req.cart;
        if (!cart) {
            return next(new AppError('Cart not found', 404, true));
        }
        const totalPrice = await cartService.getTotalPrice(cart);
        return res.status(200).json({ totalPrice });
    } catch (err) {
        next(err);
    }
}

const cartController = {
    getCartProducts,
    addToCart,
    removeFromCart,
    clearCart,
    removeQuantity,
    getTotalPrice
};

export { cartController };