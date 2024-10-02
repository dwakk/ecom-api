import { Request, Response, NextFunction } from "express";
import Product from "../models/Product";
import { createProductService } from "../services/product";

export async function getProductInfo(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    return res.json(product);
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
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}