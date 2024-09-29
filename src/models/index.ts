import Account from "./Account";
import Category from "./Category";
import Product from "./Product";

Product.belongsTo(Category);

Category.hasMany(Product);

module.exports = {
    Account,
    Category,
    Product
};