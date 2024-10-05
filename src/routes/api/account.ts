import { Router } from "express";
import { authenticateJWT } from "../../middleware/authentication";
import { accountController } from "../../controllers/account";

const accountRouter = Router();

accountRouter.post("/register", accountController.createAccount);

accountRouter.post("/login", accountController.loginAccount);

accountRouter.get("/profile", authenticateJWT, accountController.getAccountInfo);

accountRouter.patch("/profile", authenticateJWT, accountController.updateAccount);

accountRouter.delete("/profile", authenticateJWT, accountController.deleteAccount);

export default accountRouter;