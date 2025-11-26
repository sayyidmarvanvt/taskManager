import { useState } from "react";
import api from "../../utils/api";

const TaskForm = ({ categories, onTaskCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    categoryId: "",
    completed: false,
    dueDate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/tasks", formData);
      onTaskCreated(data);

      resetForm();
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      categoryId: "",
      completed: false,
      dueDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg mb-6">
      <h3 className="text-xl font-bold mb-4">Create New Task</h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Task title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />

        <textarea
          placeholder="Description (optional)"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          rows={3}
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            value={formData.categoryId}
            onChange={(e) =>
              setFormData({ ...formData, categoryId: e.target.value })
            }
            className="px-4 py-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          <select
            value={formData.completed ? "true" : "false"}
            onChange={(e) =>
              setFormData({
                ...formData,
                completed: e.target.value === "true",
              })
            }
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="false">Not Completed</option>
            <option value="true">Completed</option>
          </select>
        </div>

        <input
          type="date"
          value={formData.dueDate}
          onChange={(e) =>
            setFormData({ ...formData, dueDate: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg transition"
          >
            Create Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
