import { Router } from "express";
import { refreshController } from "../../controllers/refresh";

const refreshRouter = Router();

refreshRouter.post("/", refreshController.refresh);

export default refreshRouter;