import Account from "./Account";
import Cart from "./Cart";
import Category from "./Category";
import Product from "./Product";

Product.belongsTo(Category);

Category.hasMany(Product);

Cart.belongsTo(Account);

Cart.hasMany(Product);

module.exports = {
    Account,
    Category,
    Product,
    Cart
};