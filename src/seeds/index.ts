import seedCategories from "./category-seeds";

import sequelize from "../config/connection";
import seedProducts from "./product-seeds";

async function seedAll() {
    await sequelize.sync({ force: true });
    console.log("[DATABASE]: Synced");
    await seedCategories();
    await seedProducts();
    console.log("[DATABASE]: Seeded");

    process.exit(0);
}

seedAll();