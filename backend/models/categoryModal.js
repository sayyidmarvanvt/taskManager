import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const categoryModal = mongoose.model("Category", categorySchema);

export default categoryModal;
