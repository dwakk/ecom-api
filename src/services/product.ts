import { Op, Sequelize } from "sequelize";
import { Product, ProductImage, Category } from "../models";
import AppError from "../structures/AppError";
import { handleError } from "../utils/handleError";
import ProductAttributes from "../typings/Product";

async function createProduct(newProduct: Product): Promise<Product> {
    try {
        const productExists = await Product.findOne({
            where: { product_name: newProduct.product_name },
        });
        if (productExists) {
            throw new AppError("Product already exists", 409, true);
        }
        const product = await Product.create(newProduct);
        if (!product) {
            throw new AppError("Product not created", 500, true);
        }
        return product;
    } catch (err) {
        throw handleError(err);
    }
}

async function getProductById(id: number): Promise<Product> {
    try {
        const product = await Product.findByPk(id, {
            include: [{ model: ProductImage, as: "images" }],
        });
        if (!product) {
            throw new AppError("Product not found", 404, true);
        }
        return product;
    } catch (err) {
        throw handleError(err);
    }
}

async function getAll(): Promise<Product[]> {
    try {
        console.log(Product.associations);
        const products = await Product.findAll({
            include: [{ model: ProductImage, as: "images" }],
        });
        return products;
    } catch (err) {
        throw handleError(err);
    }
}

async function deleteProduct(id: number): Promise<true> {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new AppError("Product not found", 404, true);
        }
        await product.destroy();
        return true;
    } catch (err) {
        throw handleError(err);
    }
}

async function updateProduct(
    id: number,
    updates: Partial<Product>
): Promise<Product> {
    try {
        if (updates.price) {
            console.log("Updating price");
            const priceVal = parseFloat(updates.price.toString());
            if (isNaN(priceVal) || priceVal < 0) {
                throw new AppError("Invalid price", 400, true);
            }
            if (updates.price === priceVal) {
                throw new AppError("Product price not changed", 400, true);
            }
            updates.price = priceVal;
        }

        const affectedRows = await Product.update(updates, {
            where: { id },
            individualHooks: true,
        });
        if (affectedRows[0] === 0) {
            throw new AppError(
                "Product not found or no changes made",
                404,
                true
            );
        }
        const updatedProduct = await Product.findByPk(id);
        if (!updatedProduct) {
            throw new AppError("Product not found", 404, true);
        }
        return updatedProduct;
    } catch (err) {
        throw handleError(err);
    }
}

async function searchProduct(query: string): Promise<Product[]> {
    try {
        const products = await Product.findAll({
            where: {
                product_name: {
                    [Op.like]: Sequelize.literal(`'%${query}%' COLLATE utf8mb4_unicode_ci`)
                }
            },
        });

        const categories = await Category.findAll({
            where: {
                category_name: {
                    [Op.like]: Sequelize.literal(`'%${query}%' COLLATE utf8mb4_unicode_ci`)
                }
            },
        });

        const prodsInCat = await Product.findAll({
            where: {
                category_id: {
                    [Op.in]: categories.map((cat) => cat.id)
                }
            },
        });

        products.push(...prodsInCat);

        return products

    } catch (err) {
        throw handleError(err);
    }
}

const productService = {
    createProduct,
    getProductById,
    getAll,
    deleteProduct,
    updateProduct,
    searchProduct,
};

export { productService };
