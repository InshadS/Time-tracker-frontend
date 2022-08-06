import React, { useState } from 'react';
import { addTask } from '../../api/task';
import './style.css';

function TaskForm({ user }) {
  const [task, setTask] = useState('');
  const userId = user.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(userId, task);
    setTask('');
  };
  console.log(addTask);

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='What are you working on?'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {/* <span>00:00:00</span> */}
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

export default TaskForm;
