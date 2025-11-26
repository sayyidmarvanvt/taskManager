import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: String,
    rating: Number,
    image: String,
    stock: String,
  },
  { timestamps: true }
);
const productModal = mongoose.model("Product", productSchema);

export default productModal;
