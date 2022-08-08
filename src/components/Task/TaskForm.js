import React, { useState } from 'react';
import { addTask } from '../../api/task';
import './style.css';

function TaskForm({ user, submitTask, setSubmitTask }) {
  const [task, setTask] = useState('');
  const userId = user.id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTask(userId, task);

    setSubmitTask(!submitTask);

    setTask('');
  };

  return (
    <form
      className='task-form d-flex justify-content-between align-items-center'
      onSubmit={handleSubmit}
    >
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
