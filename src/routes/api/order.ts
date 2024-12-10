import { Router } from "express";
import { authenticateJWT } from "../../middleware/authentication";
import { setCart } from "../../middleware/cart";
import { setOrder } from "../../middleware/order";
import { orderController } from "../../controllers/order";

const orderRouter = Router();

orderRouter.post("/checkout", authenticateJWT, setCart, setOrder, orderController.checkoutSession);

orderRouter.get("/status/:sessionId", authenticateJWT, orderController.getSessionStatus);

orderRouter.get("/success", (req, res) => {
    const sessionId = req.query.session_id;
    if (!sessionId) {
        return res.json({ message: "Session not found" });
    }
    res.redirect(`/api/order/status/${sessionId}`);
});

orderRouter.get("/cancel", (req, res) => {
    res.json({ message: "Order canceled" });
});

export default orderRouter;