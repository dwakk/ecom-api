import { Router } from "express";
import { authenticateJWT, accessControl } from "../../middleware/authentication";
import { getAllAccounts, getAllProducts } from "../../middleware/admin";

const adminRouter = Router();

adminRouter.get("/", authenticateJWT, accessControl("admin"), (req, res) => {
    res.json({ message: "Admin access granted" });
});

adminRouter.get("/accounts", authenticateJWT, accessControl("admin"), getAllAccounts);

adminRouter.get("/products", authenticateJWT, accessControl("admin"), getAllProducts);

export default adminRouter;