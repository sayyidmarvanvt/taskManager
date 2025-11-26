import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "../controller/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/", authMiddleware, getCategories);
categoryRouter.post("/", authMiddleware, createCategory);
categoryRouter.post("/:id", authMiddleware, updateCategory);
categoryRouter.delete("/:id", authMiddleware, deleteCategory);

export default categoryRouter;
