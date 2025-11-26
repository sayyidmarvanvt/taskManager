import { useState } from "react";
import api from "../../utils/api";

const CategoryManager = ({ categories, onCategoriesUpdate }) => {
  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/categories", newCategory);
      onCategoriesUpdate([...categories, data]);
      setNewCategory({ name: "" });
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const handleDelete = async (id) => {
    if (
      window.confirm(
        "Delete this category? Associated tasks will not be deleted."
      )
    ) {
      try {
        await api.delete(`/categories/${id}`);
        onCategoriesUpdate(categories.filter((cat) => cat._id !== id));
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-900 mb-4">Categories</h2>

      <form onSubmit={handleCreate} className="mb-6">
        <input
          type="text"
          placeholder="Category name"
          value={newCategory.name}
          onChange={(e) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
          required
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg transition"
          >
            Add Category
          </button>
        </div>
      </form>

      <div className="space-y-2">
        {categories.map((category) => (
          <div
            key={category._id}
            className="flex items-center justify-between p-3 rounded-lg border border-gray-200"
          >
            <div className="flex items-center ">
              {category.name}
            </div>
            <button
              onClick={() => handleDelete(category._id)}
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryManager;
