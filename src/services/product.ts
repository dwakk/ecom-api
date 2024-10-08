import { Product, ProductImage, Category } from "../models/index";
import AppError from "../structures/AppError";
import { handleError } from "../utils/handleError";

async function createProduct(newProduct: Product): Promise<Product> {
    try {
        const productExists = await Product.findOne({ where: { product_name: newProduct.product_name } });
        if (productExists) {
            throw new AppError('Product already exists', 409, true);
        }
        const product = await Product.create(newProduct);
        if (!product) {
            throw new AppError('Product not created', 500, true);
        }
        return product;
    } catch (err) {
        throw handleError(err);
    }
}

async function getProductById(id: number): Promise<Product> {
    try {
        const product = await Product.findByPk(id, { include: [ProductImage] });
        if (!product) {
            throw new AppError('Product not found', 404, true);
        }
        return product;
    } catch (err) {
        throw handleError(err);
    }
}

async function getAll(): Promise<Product[]> {
    try {
        console.log(Product.associations);
        const products = await Product.findAll({ include: [{ model: ProductImage, as: "images" }] });
        return products;
    } catch (err) {
        throw handleError(err);
    }
}

async function getProductsByCategory(category: string): Promise<{ cat: Category, products: Product[]; }> {
    try {
        let cat: Category | null;
        if (isNaN(parseInt(category))) {
            cat = await Category.findOne({ where: { slug: category } });
        } else {
            cat = await Category.findOne({ where: { id: parseInt(category) } });
        }
        if (!cat) {
            throw new AppError('Category not found', 404, true);
        }
        const products = await Product.findAll({ where: { category_id: cat.id } });
        if (!products) {
            throw new AppError('Products not found', 404, true);
        }
        return { cat, products };
    } catch (err) {
        throw handleError(err);
    }
}


async function deleteProduct(id: number): Promise<true> {
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

async function updateProduct(id: number, updates: Partial<Product>): Promise<Product> {
    try {

        if (updates.price) {
            console.log("Updating price");
            const priceVal = parseFloat(updates.price.toString());
            if (isNaN(priceVal) || priceVal < 0) {
                throw new AppError('Invalid price', 400, true);
            }
            if (updates.price === priceVal) {
                throw new AppError('Product price not changed', 400, true);
            }
            updates.price = priceVal;
        }


        const affectedRows = await Product.update(updates, { where: { id }, individualHooks: true });
        if (affectedRows[0] === 0) {
            throw new AppError('Product not found or no changes made', 404, true);
        }
        const updatedProduct = await Product.findByPk(id);
        if (!updatedProduct) {
            throw new AppError('Product not found', 404, true);
        }
        return updatedProduct;
    } catch (err) {
        throw handleError(err);
    }
}

const productService = {
    createProduct,
    getProductById,
    getAll,
    getProductsByCategory,
    deleteProduct,
    updateProduct,
};

export { productService };