import React, { useState } from 'react';
import './style.css';

function TaskForm({ user }) {
  const [task, setTask] = useState('');

  return (
    <form className='task-form'>
      <input
        type='text'
        placeholder='What are you working on?'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <span>00:00:00</span>
      <button>Start</button>
    </form>
  );
}

export default TaskForm;
