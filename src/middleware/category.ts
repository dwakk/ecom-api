import { Request, Response, NextFunction } from "express";
import Category from "../models/Category";
import { getProductsByCategoryService } from "../services/product";

export async function getProductsByCategory(req: Request, res: Response, next: NextFunction) {
    try {
        const { category } = req.params;
        const products = await getProductsByCategoryService(category);
        return res.json(products);
    } catch (err) {
        next(err);
    }
}