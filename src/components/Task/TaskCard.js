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
    <div className='TaskCard d-flex justify-content-between align-items-center'>
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
      />
      <div className='time-field'>
        <span>
          {moment(item.start_time).format('h:mm a')} -{' '}
          {moment(item.end_time).format('h:mm a')}{' '}
        </span>
        <span>{item.task_duration}</span>
      </div>

      <div className='task-tools'>
        <MdIcons.MdDeleteForever onClick={handleDelete} />
      </div>
    </div>
  );
}

export default TaskCard;
