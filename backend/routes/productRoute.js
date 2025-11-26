import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  createProduct,
  getAProduct,
  getProducts,
} from "../controller/productController.js";

const productRouter = express.Router();

productRouter.get("/", authMiddleware, getProducts);
productRouter.get("/:id", authMiddleware, getAProduct);
productRouter.post("/", authMiddleware, createProduct);

export default productRouter;
