import moment from 'moment';
import React, { useState } from 'react';
import './style.css';
import { useStopwatch } from 'react-timer-hook';
import { useStore } from '../../store/index';
import { observer } from 'mobx-react-lite';
import * as FaIcons from 'react-icons/fa';

const TaskForm = observer(() => {
  const [task, setTask] = useState('');
  const [startTime, setStartTime] = useState('');

  const { tasksStore } = useStore();
  const { addTask } = tasksStore;

  const stopwatchOffset = new Date();
  stopwatchOffset.setSeconds(stopwatchOffset.getSeconds());

  const { seconds, minutes, hours, start, reset } = useStopwatch({
    autoStart: false,
    offsetTimestamp: stopwatchOffset,
  });

  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const handleSubmit = () => {
    if (/^\s*$/.test(task)) {
      return;
    }
    setStartTime(moment().format());
    start();
  };

  const endSubmit = async () => {
    const endTime = moment().format();

    const difference = moment(endTime).diff(moment(startTime));

    const duration = moment.duration(difference);
    const format = moment.utc((duration * 1000) / 1000).format('HH:mm:ss');

    const taskDuration = format;

    addTask(task, startTime, endTime, taskDuration);

    setTask('');
    setStartTime();
    reset();
  };

  return (
    <div className='task-form '>
      <input
        type='text'
        placeholder='What are you working on?'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <div className='timer d-flex align-items-center justify-content-end'>
        {/* <span>00:00:00</span> */}
        <div className='time-counter'>
          <span>{hourTime}</span>:<span>{minuteTime}</span>:
          <span>{secondTime}</span>
        </div>
        {startTime ? (
          <button
            className='btn-stop d-flex justify-content-center align-items-center'
            onClick={() => endSubmit()}
          >
            <FaIcons.FaStop />
          </button>
        ) : (
          <button className='btn-start' onClick={() => handleSubmit()}>
            <FaIcons.FaPlay />
          </button>
        )}
      </div>
    </div>
  );
});

export default TaskForm;
