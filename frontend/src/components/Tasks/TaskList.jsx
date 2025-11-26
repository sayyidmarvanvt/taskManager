import { useState, useEffect } from "react";
import api from "../../utils/api";
import TaskForm from "./TaskForm";
import CategoryManager from "./CategoryManager";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [tasksRes, categoriesRes] = await Promise.all([
        api.get("/tasks"),
        api.get("/categories"),
      ]);
      setTasks(tasksRes.data);
      setCategories(categoriesRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTaskCreated = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await api.delete(`/tasks/${taskId}`);
        setTasks(tasks.filter((task) => task._id !== taskId));
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar - Categories */}
        <div className="lg:col-span-1">
          <CategoryManager
            categories={categories}
            onCategoriesUpdate={setCategories}
          />
        </div>

        {/* Main Content - Tasks */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-3xl font-bold text-indigo-900 mb-6">
              My Tasks
            </h1>

            {/* Task Form */}
            <TaskForm
              categories={categories}
              onTaskCreated={handleTaskCreated}
            />

            {/* Tasks List */}
            <div className="space-y-4">
              {tasks.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No tasks found. Create your first task!
                </p>
              ) : (
                tasks.map((task) => (
                  <div
                    key={task._id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {task.title}
                          </h3>
                        </div>
                        {task.description && (
                          <p className="text-gray-600 mb-2">
                            {task.description}
                          </p>
                        )}
                        {task.dueDate && (
                          <p className="text-sm text-gray-500">
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDeleteTask(task._id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
