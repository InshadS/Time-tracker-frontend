import moment from 'moment';
import React, { useState } from 'react';
import * as MdIcons from 'react-icons/md';
import { deleteTask, updateTask } from '../../api/task';

function TaskCard({ item, listTask, removeTask, setRemoveTask }) {
  const [value, setValue] = useState(item.task);

  const handleDelete = async () => {
    await deleteTask(item.id);
    setRemoveTask(!removeTask);

    //   const index = listTask.findIndex((e) => e.id === item.id);
    //   listTask.splice(index, 1);
  };
  const handleUpdate = async () => {
    if (/^\s*$/.test(value)) {
      return;
    } else if (value !== item.task) {
      updateTask(item.id, value);
    }
  };
  return (
    <div className='TaskCard '>
      <input
        type='text'
        className='task-field'
        value={value}
        onBlur={(e) => {
          handleUpdate();
          e.target.parentElement.classList.remove('TaskCard-focus');
        }}
        onChange={(e) => setValue(e.target.value)}
        onFocus={(e) => {
          e.target.parentElement.classList.add('TaskCard-focus');
        }}
      />{' '}
      {moment(item.start_time).format('DD-MM-YY') ===
      moment().format('DD-MM-YY') ? (
        <span className='task-date'>Today</span>
      ) : (
        <span className='task-date'>
          {moment(item.start_time).format('ddd, DD YYYY')}
        </span>
      )}
      <div className='time-field d-flex justify-content-between'>
        <span>
          {moment(item.start_time).format('h:mm a')} -{' '}
          {moment(item.end_time).format('h:mm a')}{' '}
        </span>
        <span className='duration '>{item.task_duration}</span>
      </div>
      <div className='task-tool d-flex justify-content-end'>
        <MdIcons.MdDeleteForever
          onClick={handleDelete}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

export default TaskCard;
