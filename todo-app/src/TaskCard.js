import React from 'react';
import './TaskCard.css'; 
 // Parent component
function TaskCard() {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleUpdate = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default TaskCard;