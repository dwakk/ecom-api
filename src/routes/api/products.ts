import { Router } from "express";
import { productController } from "../../controllers/product";
import { accessControl, authenticateJWT } from "../../middleware/authentication";

const productRouter = Router();

productRouter.get("/", productController.getAllProducts);

productRouter.get("/search", productController.searchProduct);

productRouter.get("/:id", productController.getProductInfo);

productRouter.delete("/:id", authenticateJWT, accessControl("admin"), productController.deleteProduct);

productRouter.patch("/:id", authenticateJWT, accessControl("admin"), productController.updateProduct);

export default productRouter;