import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskData, setEditTaskData] = useState({ title: '', description: '' });
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      alert('You must be logged in to view this page.');
      window.location.href = '/login';
      return;
    }

    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        alert(err.response?.data?.error || 'Error fetching tasks.');
      }
    };

    fetchTasks();
  }, [token]);

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tasks', newTask, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks([...tasks, response.data]);
      setNewTask({ title: '', description: '' });
    } catch (err) {
      alert(err.response?.data?.error || 'Error adding task.');
    }
  };

  const handleEditTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/tasks/${editTaskId}`, editTaskData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.map((task) => (task._id === editTaskId ? response.data : task)));
      setEditTaskId(null);
      setEditTaskData({ title: '', description: '' });
    } catch (err) {
      alert(err.response?.data?.error || 'Error editing task.');
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await axios.delete(`/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (err) {
      alert(err.response?.data?.error || 'Error deleting task.');
    }
  };

  const toggleTaskCompletion = async (task) => {
    try {
      const response = await axios.patch(`/api/tasks/${task._id}/toggle-completed`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.map((t) => (t._id === task._id ? response.data : t)));
    } catch (err) {
      alert(err.response?.data?.error || 'Error toggling task.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-500 via-indigo-600 to-purple-700 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">Your Tasks</h1>

        {/* Add Task Form */}
        <form onSubmit={handleAddTask} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <h2 className="text-2xl font-semibold mb-4 text-white">Add New Task</h2>
          <input
            type="text"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            placeholder="Title"
            className="w-full p-3 mb-4 bg-white/20 rounded-md placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <textarea
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            placeholder="Description"
            rows="3"
            className="w-full p-3 mb-6 bg-white/20 rounded-md placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button type="submit" className="w-full bg-teal-400 hover:bg-teal-500 py-3 rounded-md font-semibold text-white transition-all shadow-md hover:scale-105">
            ➕ Add Task
          </button>
        </form>

        {/* Task List */}
        <div className="mt-10 space-y-6">
          {tasks.length === 0 ? (
            <p className="text-center text-white/80 text-xl">No tasks available.</p>
          ) : (
            tasks.map((task) => (
              <div key={task._id} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-md hover:shadow-xl transition-all duration-300">
                {editTaskId === task._id ? (
                  <form onSubmit={handleEditTask}>
                    <input
                      type="text"
                      value={editTaskData.title}
                      onChange={(e) => setEditTaskData({ ...editTaskData, title: e.target.value })}
                      className="w-full p-3 mb-3 bg-white/20 text-white placeholder-white/70 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                      placeholder="Edit Title"
                      required
                    />
                    <textarea
                      value={editTaskData.description}
                      onChange={(e) => setEditTaskData({ ...editTaskData, description: e.target.value })}
                      className="w-full p-3 mb-4 bg-white/20 text-white placeholder-white/70 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                      placeholder="Edit Description"
                    />
                    <div className="flex justify-end space-x-3">
                      <button type="submit" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md font-medium text-white">
                        ✅ Save
                      </button>
                      <button onClick={() => setEditTaskId(null)} className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md font-medium text-white">
                        ❌ Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold">{task.title}</h3>
                    <p className="text-white/80 mt-2">{task.description}</p>
                    <p className={`mt-2 text-sm ${task.isCompleted ? 'text-green-300' : 'text-yellow-300'}`}>
                      {task.isCompleted ? '✅ Completed' : '⏳ Pending'}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <button
                        onClick={() => toggleTaskCompletion(task)}
                        className={`px-4 py-2 rounded-md font-medium text-white shadow-sm transition ${
                          task.isCompleted ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'
                        }`}
                      >
                        {task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
                      </button>
                      <button
                        onClick={() => {
                          setEditTaskId(task._id);
                          setEditTaskData({ title: task.title, description: task.description });
                        }}
                        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md font-medium text-white"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task._id)}
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-medium text-white"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
