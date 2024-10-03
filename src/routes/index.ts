import { Router } from "express";
import authRouter from "./api/auth";
import adminRouter from "./api/admin";
import accountRouter from "./api/account";
import productRouter from "./api/product";
import categoryRouter from "./api/category";

const router = Router();


router.use("/account", accountRouter);

router.use("/admin", adminRouter);

router.use("/auth", authRouter);

router.use("/products", productRouter);

router.use("/category", categoryRouter);

export default router;
