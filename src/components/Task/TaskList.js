import React, { useState } from 'react';

function TaskList({ user }) {
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
      <TaskForm user={user} onSubmit={addTask} />
    </div>
  );
}

export default TaskList;
