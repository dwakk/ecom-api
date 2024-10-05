import { Router } from "express";
import { categoryController } from "../../controllers/category";
import { accessControl, authenticateJWT } from "../../middleware/authentication";

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.post("/", authenticateJWT, accessControl("admin"), categoryController.createCategory);

categoryRouter.get("/:category", categoryController.getProductsByCategory);

categoryRouter.delete("/:id", authenticateJWT, accessControl("admin"), categoryController.deleteCategory);

categoryRouter.patch("/:id", authenticateJWT, accessControl("admin"), categoryController.updateCategory);

export default categoryRouter;