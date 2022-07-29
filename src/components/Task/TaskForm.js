import React, { useState } from 'react';
import './style.css';

function TaskForm(props) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      name: task,
      start_time: new Date(),
    });

    setTask('');
  };
  return (
    <form className='task-form' onClick={handleSubmit}>
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
