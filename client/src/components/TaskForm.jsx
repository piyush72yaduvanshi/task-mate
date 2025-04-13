import { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, initialData }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    category: '',
  });

  useEffect(() => {
    if (initialData) setTask(initialData);
  }, [initialData]);

  const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ title: '', description: '', dueDate: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 bg-white rounded shadow">
      <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required className="w-full p-2 border rounded" />
      <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="category" value={task.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save Task</button>
    </form>
  );
};

export default TaskForm;
