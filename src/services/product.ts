import Category from "../models/Category";
import Product from "../models/Product";
import AppError from "../structures/AppError";
import { handleError } from "./error";

export async function createProductService(newProduct: Product): Promise<Product> {
    try {
        const product = await Product.create(newProduct);
        if (!product) {
            throw new AppError('Product not created', 500, true);
        }
        return product;
    } catch (err) {
        throw handleError(err);
    }
}

export async function getProductByIdService(id: number): Promise<Product> {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new AppError('Product not found', 404, true);
        }
        return product;
    } catch (err) {
        throw handleError(err);
    }
}

export async function getAllProductsService(): Promise<Product[]> {
    try {
        const products = await Product.findAll();
        return products;
    } catch (err) {
        throw handleError(err);
    }
}

export async function getProductsByCategoryService(category: string | number) {
    try {
        if (typeof category === 'string') {
            let c = await Category.findOne({ where: { slug: category } });
            if (!c) {
                throw new AppError('Category not found', 404, true);
            }
            category = c.id;
        }
        const products = await Product.findAll({ where: { category_id: category } });
        if (!products) {
            throw new AppError('Products not found', 404, true);
        }
        return products;
    } catch (err) {
        throw handleError(err);
    }
}


export async function deleteProductService(id: number) {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new AppError('Product not found', 404, true);
        }
        await product.destroy();
        return true;
    } catch (err) {
        throw handleError(err);
    }
}

export async function updateProductService(id: number, updates: Partial<Product>) {
    try {
        const [affectedRows, [updatedProduct]] = await Product.update(updates, { where: { id }, returning: true, individualHooks: true });
        if (affectedRows === 0) {
            throw new AppError('Product not found or no changes made', 404, true);
        }
        if (!updatedProduct) {
            throw new AppError('Product not found', 404, true);
        }
        return updatedProduct;
    } catch (err) {
        throw handleError(err);
    }
}