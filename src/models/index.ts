import Account from "./Account";
import Cart from "./Cart";
import Category from "./Category";
import Product from "./Product";
import Order from "./Order";
import CartProduct from "./CartProduct";
import OrderProduct from "./OrderProduct";
import ProductImage from "./ProductImage";

Product.belongsTo(Category);
Category.hasMany(Product, { foreignKey: "category_id" });

Product.hasMany(ProductImage, { foreignKey: "product_id", as: "images" });
ProductImage.belongsTo(Product, { foreignKey: "product_id", as: "product" });

Cart.belongsTo(Account, { foreignKey: "account_id" });
Account.hasOne(Cart, { foreignKey: "account_id" });

Cart.belongsToMany(Product, { through: CartProduct, foreignKey: "cart_id" });
Product.belongsToMany(Cart, { through: CartProduct, foreignKey: "product_id" });

Order.belongsTo(Cart, { foreignKey: "cart_id", onDelete: "CASCADE" });
Cart.hasOne(Order, { foreignKey: "cart_id", onDelete: "CASCADE" });

Order.belongsTo(Account, { foreignKey: "account_id" });
Account.hasMany(Order, { foreignKey: "account_id" });

Order.belongsToMany(Product, { through: OrderProduct, foreignKey: "order_id" });
Product.belongsToMany(Order, { through: OrderProduct, foreignKey: "product_id" });

export {
    Account,
    Cart,
    Category,
    Product,
    Order,
    CartProduct,
    OrderProduct,
    ProductImage
};