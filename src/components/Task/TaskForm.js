import React, { useState, useEffect } from 'react';
import { addTask, endTask } from '../../api/task';
import './style.css';

function TaskForm({ user, submitTask, setSubmitTask }) {
  const [task, setTask] = useState('');
  const userId = user.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task || /^\s*$/.test(task)) {
      return;
    } else {
      await addTask(userId, task);
    }

    setSubmitTask(!submitTask);

    setTask('');
  };
  // const endSubmit = async () => {
  //   await endTask(id);
  // };
  return (
    <form className='task-form d-flex justify-content-between align-items-center'>
      <input
        type='text'
        placeholder='What are you working on?'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {/* <span>00:00:00</span> */}
      <button onClick={handleSubmit}>Start</button>
      {/* <button onClick={endSubmit}>Stop</button> */}
    </form>
  );
}

export default TaskForm;
