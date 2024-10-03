import Account from "./Account";
import Cart from "./Cart";
import Category from "./Category";
import Product from "./Product";
import Order from "./Order";

Product.belongsTo(Category);

Category.hasMany(Product);

Cart.belongsTo(Account);

Cart.hasMany(Product);

Order.belongsTo(Account);

Order.hasMany(Cart);

module.exports = {
    Account,
    Category,
    Product,
    Cart
};