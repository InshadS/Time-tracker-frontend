import React, { useState } from 'react';
import TaskForm from './TaskForm';

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
    <div className='w-100 d-flex align-items-center flex-column'>
      <div className='input-container'>
        <TaskForm user={user} onSubmit={addTask} />
      </div>
      <div className='list-container'>
        <div className='week'>
          <span>This week</span>
          <span className='week-total'>00:00:00</span>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
