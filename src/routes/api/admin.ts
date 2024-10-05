import { Router } from "express";
import { authenticateJWT, accessControl } from "../../middleware/authentication";
import { adminController } from "../../controllers/admin";

const adminRouter = Router();

adminRouter.get("/", authenticateJWT, accessControl("admin"), (req, res) => {
    res.json({ message: "Admin access granted" });
});

adminRouter.get("/accounts", authenticateJWT, accessControl("admin"), adminController.getAllAccounts);

adminRouter.get("/products", authenticateJWT, accessControl("admin"), adminController.getAllProducts);

export default adminRouter;