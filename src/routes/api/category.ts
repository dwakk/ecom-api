import { Router } from "express";
import { getProductsByCategory } from "../../middleware/category";

const categoryRouter = Router();

categoryRouter.get("/:category", getProductsByCategory);

export default categoryRouter;