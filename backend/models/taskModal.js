import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
    dueDate: Date,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);
const taskModal = mongoose.model("Task", taskSchema);

export default taskModal;
