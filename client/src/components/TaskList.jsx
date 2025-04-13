import TaskCard from './TaskCard';

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => (
  <div className="grid gap-4">
    {tasks.map((task) => (
      <TaskCard key={task._id} task={task} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
    ))}
  </div>
);

export default TaskList;
