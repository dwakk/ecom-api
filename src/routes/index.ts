import { Router } from "express";
import adminRouter from "./api/admin";
import accountRouter from "./api/account";
import productRouter from "./api/products";
import categoryRouter from "./api/category";
import cartRouter from "./api/cart";
import orderRouter from "./api/order";

const router = Router();


router.use("/account", accountRouter);

router.use("/admin", adminRouter);

router.use("/products", productRouter);

router.use("/category", categoryRouter);

router.use("/cart", cartRouter);

router.use("/order", orderRouter);

export default router;
