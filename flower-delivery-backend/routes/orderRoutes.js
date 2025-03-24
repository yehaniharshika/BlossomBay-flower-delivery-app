import express from "express"
import authMiddleware from '../middleware/auth.js';
import { placeOrder, verifyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/placeOrder",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);

export default orderRouter;