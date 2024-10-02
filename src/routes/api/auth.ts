import { Router } from "express";
import { accessControl, authenticateJWT } from "../../middleware/authentication";
import { createAccount, getAccountInfo, loginAccount, updateAccount } from "../../middleware/account";

const authRouter = Router();

authRouter.get("/account", authenticateJWT, getAccountInfo);

authRouter.post("/register", createAccount);

authRouter.post("/login", loginAccount);

authRouter.get("/admin", authenticateJWT, accessControl("admin"), (req, res) => {
    res.json({ message: "Admin access granted" });
});

authRouter.patch("/update", authenticateJWT, updateAccount);

export default authRouter;