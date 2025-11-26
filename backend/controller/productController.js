import productModal from "../models/productModal.js";

export const getProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, sort, search } = req.query;
console.log("reached at get produts");

    // Build filter
    let filter = {};
    if (category) filter.category = category;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    // Build sort
    let sortOption = {};
    if (sort === "price-asc") sortOption.price = 1;
    else if (sort === "price-desc") sortOption.price = -1;
    else if (sort === "name-asc") sortOption.name = 1;
    else if (sort === "name-desc") sortOption.name = -1;
    else sortOption.createdAt = -1;

    const products = await productModal.find(filter).sort(sortOption);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error in getting products", error: error.message });
  }
};

export const getAProduct = async (req, res) => {
  try {
    const product = await productModal.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Server error in getting A product",
        error: error.message,
      });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new productModal(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Server error in creating a product",
        error: error.message,
      });
  }
};
