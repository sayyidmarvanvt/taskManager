import categoryModal from "../models/categoryModal.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await categoryModal.find({ user: req.user._id });
    res.json(categories);
  } catch (error) {
    res.status(500).json({
      message: "Server error in getting categories",
      error: error.message,
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoryModal.create({ name, user: req.user._id });
    await category.save();
    res.json(category);
  } catch (error) {
    res.status(500).json({
      message: "Server error in create category",
      error: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await categoryModal.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({
      message: "Server error in update category",
      error: error.message,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await categoryModal.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Server error in delete category",
      error: error.message,
    });
  }
};
