import { Router } from "express";
import { cartController } from "../../controllers/cart";
import { authenticateJWT } from "../../middleware/authentication";
import { setCart } from "../../middleware/cart";

const cartRouter = Router();

cartRouter.get("/", authenticateJWT, setCart, cartController.getCartProducts);

cartRouter.delete("/", authenticateJWT, setCart, cartController.clearCart);

cartRouter.post("/products", authenticateJWT, setCart, cartController.addToCart);

cartRouter.patch("/products", authenticateJWT, setCart, cartController.editQuantity);

cartRouter.delete("/products/:id", authenticateJWT, setCart, cartController.removeFromCart);

cartRouter.get("/total", authenticateJWT, setCart, cartController.getTotalPrice);


export default cartRouter;