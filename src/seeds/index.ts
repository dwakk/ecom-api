import sequelize from "../config/connection";

import seedCategories from "./category-seeds";
import seedProducts from "./product-seeds";
import seedAccounts from "./account-seeds";
import seedCarts from "./cart-seeds";
import seedOrders from "./order-seeds";
import seedCartProducts from "./cart-product-seeds";

async function seedAll() {
    await sequelize.sync({ force: true });
    console.log("[DATABASE]: Synced");
    await seedOrders();
    await seedCategories();
    await seedProducts();
    await seedAccounts();
    await seedCarts();
    await seedCartProducts();
    console.log("[DATABASE]: Seeded");

    process.exit(0);
}

seedAll();