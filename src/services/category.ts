import { Category, Product } from "../models";
import AppError from "../structures/AppError";
import { handleError } from "../utils/handleError";

async function getAll(): Promise<Category[]> {
    try {
        const categories = await Category.findAll();
        if (!categories) {
            throw new AppError('Categories not found', 404, true);
        }
        return categories;
    } catch (err) {
        throw handleError(err);
    }
}

async function createCategory(newCategory: Category): Promise<Category> {
    try {
        const categoryExists = await Category.findOne({ where: { slug: newCategory.slug } });
        if (categoryExists) {
            throw new AppError('Category already exists', 409, true);
        }
        const category = await Category.create(newCategory);
        if (!category) {
            throw new AppError('Category not created', 500, true);
        }
        return category;
    } catch (err) {
        throw handleError(err);
    }
}

async function deleteCategory(id: number): Promise<true> {
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            throw new AppError('Category not found', 404, true);
        }
        await category.destroy();
        return true;
    } catch (err) {
        throw handleError(err);
    }
}

async function updateCategory(id: number, updates: Partial<Category>): Promise<Category> {
    try {
        if (updates.slug) {
            const categoryExists = await Category.findOne({ where: { slug: updates.slug } });
            if (categoryExists) {
                throw new AppError('Category already exists', 409, true);
            }
            updates.url = `${process.env.BASE_URL}/category/${updates.slug}`;
        }
        const affectedRows = await Category.update(updates, { where: { id }, individualHooks: true });
        if (affectedRows[0] === 0) {
            throw new AppError('Category not found or no changes made', 404, true);
        }
        const updatedCategory = await Category.findByPk(id);
        if (!updatedCategory) {
            throw new AppError('Category not found', 404, true);
        }
        return updatedCategory;
    } catch (err) {
        throw handleError(err);
    }
}

async function getProductsByCategory(category: string): Promise<{ cat: Category, products: Product[]; }> {
    try {
        const identifier = isNaN(parseInt(category))
            ? { slug: category }
            : { id: parseInt(category) };

        const cat = await Category.findOne({ where: identifier });
        if (!cat) {
            throw new AppError('Category not found', 404, true);
        }

        const products = await Product.findAll({ where: { category_id: cat.id } });

        return { cat, products };
    } catch (err) {
        throw handleError(err);
    }
}

const categoryService = {
    getAll,
    createCategory,
    deleteCategory,
    updateCategory,
    getProductsByCategory
};

export { categoryService };