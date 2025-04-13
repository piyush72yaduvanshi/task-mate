import { useEffect, useState } from 'react';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTask
} from '../api';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import SortDropdown from '../components/SortDropdown';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  const fetchTasks = async () => {
    const query = new URLSearchParams();
    if (search) query.append('search', search);
    if (category) query.append('category', category);
    if (sortBy) query.append('sort', sortBy);

    const res = await getTasks(query.toString());
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [search, category, sortBy]);

  const handleAddOrUpdate = async (task) => {
    if (editTask) {
      await updateTask(editTask._id, task);
      setEditTask(null);
    } else {
      await createTask(task);
    }
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleToggle = async (id) => {
    await toggleTask(id);
    fetchTasks();
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold text-center">Task Mate</h1>

      {/* Search + Filter + Sort */}
      <div className="flex flex-col sm:flex-row gap-2">
        <SearchBar search={search} onSearchChange={setSearch} />
        <FilterDropdown category={category} onCategoryChange={setCategory} />
        <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      {/* Task Form */}
      <TaskForm onSubmit={handleAddOrUpdate} initialData={editTask} />

      {/* Task List */}
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onEdit={setEditTask}
      />
    </div>
  );
};

export default Home;
