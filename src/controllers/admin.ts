import { Request, Response, NextFunction } from "express";
import { accountService } from "../services/account";
import { productService } from "../services/product";

async function getAllAccounts(req: Request, res: Response, next: NextFunction) {
    try {
        const accounts = await accountService.getAll();
        return res.status(200).json(accounts);
    } catch (err) {
        next(err);
    }
}

async function getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
        const products = await productService.getAll();
        return res.status(200).json(products);
    } catch (err) {
        next(err);
    }
}

const adminController = {
    getAllAccounts,
    getAllProducts
};

export { adminController };