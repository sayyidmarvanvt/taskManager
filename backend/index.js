import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import taskRouter from "./routes/taskRoute.js";
import productRouter from "./routes/productRoute.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://taskmanager-1-ov4m.onrender.com"],
    credentials: true,
  })
);
dotenv.config();

await connectDB();

app.use("/api/auth", authRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/tasks", taskRouter);
app.use("/api/products", productRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
