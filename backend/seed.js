import mongoose from "mongoose";
import Product from "./models/productModal.js";
import dotenv from "dotenv";
dotenv.config();


const products = [
  {
    name: "Wireless Bluetooth Headphones",
    description: "Premium sound quality with noise cancellation",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    stock: 50,
    rating: 4.5,
  },
  {
    name: "Smart Watch Series 5",
    description: "Track your fitness and stay connected",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    stock: 30,
    rating: 4.8,
  },
  {
    name: "Leather Laptop Bag",
    description: "Professional style meets functionality",
    price: 89.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    stock: 25,
    rating: 4.3,
  },
  {
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and eco-friendly",
    price: 24.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    stock: 100,
    rating: 4.6,
  },
  {
    name: "Stainless Steel Water Bottle",
    description: "Keep your drinks cold for 24 hours",
    price: 34.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    stock: 75,
    rating: 4.7,
  },
  {
    name: "Wireless Mouse",
    description: "Ergonomic design for all-day comfort",
    price: 29.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    stock: 60,
    rating: 4.4,
  },
  {
    name: "Yoga Mat Premium",
    description: "Non-slip surface for better grip",
    price: 49.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
    stock: 40,
    rating: 4.9,
  },
  {
    name: "Coffee Maker Deluxe",
    description: "Brew perfect coffee every morning",
    price: 149.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
    stock: 20,
    rating: 4.2,
  },
  {
    name: "Running Shoes Pro",
    description: "Lightweight and breathable",
    price: 119.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    stock: 45,
    rating: 4.7,
  },
  {
    name: "Portable Charger 20000mAh",
    description: "Charge multiple devices on the go",
    price: 39.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5",
    stock: 80,
    rating: 4.5,
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert new products
    await Product.insertMany(products);
    console.log("Products seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
