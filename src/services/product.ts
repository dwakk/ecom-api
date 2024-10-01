import Category from "../models/Category";
import Product from "../models/Product";

async function createProduct(newProduct: Product) {
    try {
        const product = await Product.create(newProduct);
        return product;
    } catch (err) {
        throw err;
    }
}

async function getProductById(id: number) {
    try {
        const product = await Product.findByPk(id);
        return product;
    } catch (err) {
        throw err;
    }
}

async function getAllProducts() {
    try {
        const products = await Product.findAll();
        return products;
    } catch (err) {
        throw err;
    }
}

async function getProductsByCategory(category: string | number) {
    try {
        if (typeof category === 'string') {
            let c = await Category.findOne({ where: { slug: category } });
            if (!c) {
                throw new Error('Category not found');
            }
            category = c.id;
        }
        const products = await Product.findAll({ where: { category_id: category } });
        return products;
    } catch (err) {
        throw err;
    }
}


async function deleteProduct(id: number) {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new Error('Product not found');
        }
        await product.destroy();
        return true;
    } catch (err) {
        throw err;
    }
}

async function updateProduct(id: number, updates: Partial<Product>) {
    try {
        const [affectedRows, [updatedProduct]] = await Product.update(updates, { where: { id }, returning: true, individualHooks: true });
        if (affectedRows === 0) {
            throw new Error('Product not found');
        }
        return updatedProduct;
    } catch (err) {
        throw err;
    }
}


export default { createProduct, getProductById, getAllProducts, getProductsByCategory, deleteProduct, updateProduct };