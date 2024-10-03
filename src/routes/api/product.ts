import { Router } from "express";
import { getAllProducts, getProductInfo } from "../../middleware/product";

const productRouter = Router();

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProductInfo);

export default productRouter;