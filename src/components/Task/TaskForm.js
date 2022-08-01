import React, { useState } from 'react';
import './style.css';
import { useStopwatch } from 'react-timer-hook';

function TaskForm(props) {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

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
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      <button onClick={start}>Start</button>
      <button onClick={[pause, reset]}>Stop</button>
    </form>
  );
}

export default TaskForm;
