import sequelize from "../config/connection";

import seedCategories from "./category-seeds";
import seedProducts from "./product-seeds";
import seedAccounts from "./account-seeds";
import seedCarts from "./cart-seeds";

async function seedAll() {
    await sequelize.sync({ force: true });
    console.log("[DATABASE]: Synced");
    await seedCategories();
    await seedProducts();
    //await seedAccounts();
    //await seedCarts();
    console.log("[DATABASE]: Seeded");

    process.exit(0);
}

seedAll();