import sequelize from "../config/connection";

import seedCategories from "./category-seeds";
import seedProducts from "./product-seeds";
import seedAccounts from "./account-seeds";
import seedCarts from "./cart-seeds";
import seedOrders from "./order-seeds";
import seedCartProducts from "./cart-product-seeds";
import seedProductImages from "./product-image-seeds";

async function seedAll() {
    await sequelize.sync({ force: true });
    console.log("[DATABASE]: Synced");
    await seedCategories();
    await seedProducts();
    await seedOrders();
    await seedAccounts();
    await seedCarts();
    await seedCartProducts();
    await seedProductImages();
    console.log("[DATABASE]: Seeded");

    process.exit(0);
}

seedAll();