import { Request, Response, NextFunction } from "express";
import Product from "../models/Product";
import { createProductService, getAllProductsService, getProductByIdService } from "../services/product";
import AppError from "../structures/AppError";

export async function getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
        const products = await getAllProductsService();
        return res.json(products);
    } catch (err) {
        next(err);
    }
}

export async function getProductInfo(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const product = await getProductByIdService(parseInt(id));
        return res.json(product);
    } catch (err) {
        next(err);
    }
}

export async function createProduct(req: Request, res: Response, next: NextFunction) {
    const { product_name, price, category_id, description } = req.body;
    if (!product_name || !price || !category_id || !description) {
        throw new AppError('All fields are required', 400, true);
    }

    const newProduct = {
        product_name,
        price,
        category_id,
        description
    } as Product;

    try {
        const product = await createProductService(newProduct);
        return res.status(201).json(product);
    } catch (err) {
        next(err);
    }
}