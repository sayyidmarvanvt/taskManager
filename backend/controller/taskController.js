import taskModal from "../models/taskModal.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await taskModal.find({ user: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Server error in getting tasks",
      error: error.message,
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, category, completed } = req.body;
    const task = await taskModal.create({
      title,
      description,
      dueDate,
      category,
      completed,
      user: req.user._id,
    });
    console.log("reached in create task",task);
    
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: "Server error in create task",
      error: error.message,
    });
  }
};

