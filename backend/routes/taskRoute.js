import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  createTask,
  getTasks,
} from "../controller/taskController.js";

const taskRouter = express.Router();

taskRouter.get("/", authMiddleware, getTasks);
taskRouter.post("/", authMiddleware, createTask);

export default taskRouter;
