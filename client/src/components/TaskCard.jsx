const TaskCard = ({ task, onDelete, onToggle, onEdit }) => {
    return (
      <div className={`p-4 border rounded shadow ${task.isCompleted ? 'bg-green-100' : 'bg-white'}`}>
        <h2 className="text-lg font-bold">{task.title}</h2>
        <p>{task.description}</p>
        <p className="text-sm text-gray-500">Due: {task.dueDate?.slice(0, 10)}</p>
        <p className="text-sm text-gray-500">Category: {task.category}</p>
  
        <div className="flex gap-2 mt-2">
          <button onClick={() => onToggle(task._id)} className="text-green-600">{task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}</button>
          <button onClick={() => onEdit(task)} className="text-blue-600">Edit</button>
          <button onClick={() => onDelete(task._id)} className="text-red-600">Delete</button>
        </div>
      </div>
    );
  };
  
  export default TaskCard;
  