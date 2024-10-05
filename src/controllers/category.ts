import { Request, Response, NextFunction } from "express";
import Category from "../models/Category";
import { productService } from "../services/product";
import AppError from "../structures/AppError";
import { categoryService } from "../services/category";

async function getProductsByCategory(req: Request, res: Response, next: NextFunction) {
    try {
        const { category } = req.params;
        const { products, cat } = await productService.getProductsByCategory(category);
        return res.json({ category: cat, products });
    } catch (err) {
        next(err);
    }
}

async function getAllCategories(req: Request, res: Response, next: NextFunction) {
    try {
        const categories = await categoryService.getAll();
        return res.json(categories);
    } catch (err) {
        next(err);
    }
}

async function createCategory(req: Request, res: Response, next: NextFunction) {
    const { category_name, slug } = req.body;
    if (!category_name || !slug) {
        return next(new AppError('All fields are required', 400, true));
    }
    const newCategory = {
        category_name,
        slug,
        url: `${process.env.BASE_URL}/category/${slug}`
    } as Category;
    try {
        const category = await categoryService.createCategory(newCategory);
        return res.status(201).json(category);
    } catch (err) {
        next(err);
    }
}

async function deleteCategory(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return next(new AppError('Invalid ID', 400, true));
    }
    try {
        const isDestroyed = await categoryService.deleteCategory(parsedId);
        if (!isDestroyed) {
            return next(new AppError('Category not destroyed', 404, true));
        }
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}

async function updateCategory(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const data = req.body;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return next(new AppError('Invalid ID', 400, true));
    }
    try {
        const updatedCategory = await categoryService.updateCategory(parsedId, data);
        return res.status(200).json(updatedCategory);
    } catch (err) {
        next(err);
    }
}

const categoryController = {
    getProductsByCategory,
    getAllCategories,
    createCategory,
    deleteCategory,
    updateCategory
};

export { categoryController };