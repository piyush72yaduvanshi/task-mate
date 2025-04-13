const Task = require('../models/Task');

// Create Task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Tasks (with search, filter, sort)
exports.getTasks = async (req, res) => {
  const { search, category, sort } = req.query;
  let query = {};

  // Search by title or description (case-insensitive)
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }

  // Filter by category
  if (category) {
    query.category = category;
  }

  // Sort options
  let sortOptions = {};
  if (sort === 'dueDate') sortOptions.dueDate = 1;             // ascending
  else if (sort === 'createdAt') sortOptions.createdAt = -1;   // newest first
  else if (sort === 'status') sortOptions.isCompleted = 1;     // incomplete first

  try {
    const tasks = await Task.find(query).sort(sortOptions);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Toggle Task Completion
exports.toggleCompleted = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
