import { Request, Response, NextFunction } from "express";
import { getAllAccountsService } from "../services/account";
import { getAllProductsService } from "../services/product";

export async function getAllAccounts(req: Request, res: Response, next: NextFunction) {
    try {
        const accounts = await getAllAccountsService();
        return res.status(200).json(accounts);
    } catch (err) {
        next(err);
    }
}

export async function getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
        const products = await getAllProductsService();
        return res.status(200).json(products);
    } catch (err) {
        next(err);
    }
}