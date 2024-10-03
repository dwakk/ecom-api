import { Router } from "express";
import { authenticateJWT } from "../../middleware/authentication";
import { getAccountInfo, updateAccount } from "../../middleware/account";

const accountRouter = Router();

accountRouter.get("/", authenticateJWT, getAccountInfo);

accountRouter.patch("/update", authenticateJWT, updateAccount);

export default accountRouter;