import { Router } from "express";
import { authenticateJWT } from "../../middleware/authentication";
import { createAccount, getAccountInfo, loginAccount } from "../../middleware/account";

const authRouter = Router();

authRouter.get("/account", authenticateJWT, getAccountInfo);

authRouter.post("/register", createAccount);

authRouter.post("/login", loginAccount);

export default authRouter;