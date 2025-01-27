import { Request, Response, NextFunction } from "express";
import { Product } from "../models";
import { productService } from "../services/product";
import AppError from "../structures/AppError";

async function getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
        const products = await productService.getAll();
        return res.json(products);
    } catch (err) {
        next(err);
    }
}

async function getProductInfo(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return next(new AppError('Invalid ID', 400, true));
    }
    try {
        const product = await productService.getProductById(parsedId);
        return res.json(product);
    } catch (err) {
        next(err);
    }
}

async function createProduct(req: Request, res: Response, next: NextFunction) {
    const { product_name, price, category_id, description, stock } = req.body;
    if (!product_name || !price || !category_id || !description || !stock) {
        return next(new AppError('All fields are required', 400, true));
    }

    const newProduct = {
        product_name,
        price,
        category_id,
        description,
        stock,
        reserved: 0
    } as Product;

    try {
        const product = await productService.createProduct(newProduct);
        return res.status(201).json(product);
    } catch (err) {
        next(err);
    }
}

async function deleteProduct(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return next(new AppError('Invalid ID', 400, true));
    }
    try {
        const isDestroyed = await productService.deleteProduct(parsedId);
        if (!isDestroyed) {
            return next(new AppError('Product not destroyed', 404, true));
        }
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}

async function updateProduct(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const data = req.body;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return next(new AppError('Invalid ID', 400, true));
    }
    try {
        const updatedProduct = await productService.updateProduct(parsedId, data);
        return res.status(200).json(updatedProduct);
    } catch (err) {
        next(err);
    }
}

async function searchProduct(req: Request, res: Response, next: NextFunction) {
    const { query } = req.query;
    if (!query || typeof query !== 'string') {
        return next(new AppError('Keyword is required and must be a string', 400, true));
    }
    
    try {
        const products = await productService.searchProduct(query);
        return res.json(products);
    } catch (err) {
        next(err);
    }
}

const productController = {
    getAllProducts,
    getProductInfo,
    createProduct,
    deleteProduct,
    updateProduct,
    searchProduct
};

export { productController };
