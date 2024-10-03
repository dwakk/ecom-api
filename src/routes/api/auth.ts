import { Router } from "express";
import { createAccount, loginAccount } from "../../middleware/account";

const authRouter = Router();

authRouter.post("/register", createAccount);

authRouter.post("/login", loginAccount);

export default authRouter;