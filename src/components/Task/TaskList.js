import React, { useState } from 'react';
import TaskForm from './TaskForm';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.name || /^\s*$/.test(task.name)) {
      return;
    }

    const newTasks = [task, ...tasks];

    setTasks(newTasks);
    console.log(newTasks);
  };
  return (
    <div>
      <TaskForm onSubmit={addTask} />
    </div>
  );
}

export default TaskList;
