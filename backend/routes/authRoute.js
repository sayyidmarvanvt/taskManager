import express from "express";
import {
  login,
  register,
  getCurrentUser,
} from "../controller/authController.js";
import { rateLimiter } from "../middleware/rateLimiter.js";
import authMiddleware from "../middleware/auth.js";

const authRouter = express.Router();

authRouter.get("/me", authMiddleware, getCurrentUser);
authRouter.post("/register", rateLimiter, register);
authRouter.post("/login", rateLimiter, login);

export default authRouter;
