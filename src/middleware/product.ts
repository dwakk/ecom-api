import { Request, Response, NextFunction } from "express";
import Product from "../models/Product";
import { createProductService, getAllProductsService } from "../services/product";

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
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.json(product);
    } catch (err) {
        next(err);
    }
}

export async function createProduct(req: Request, res: Response, next: NextFunction) {
    const { product_name, price, category_id, description } = req.body;
    if (!product_name || !price || !category_id || !description) {
        return res.status(400).json({ message: 'All fields are required' });
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