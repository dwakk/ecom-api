import Product from "../models/Product";

async function createProduct(newProduct: Product) {
    try {
        const product = await Product.create(newProduct);
        return product;
    } catch (err) {
        throw err;
    }
}