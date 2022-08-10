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
  return (
    <div>
      <div className='TaskCard d-flex justify-content-between align-items-center'>
        <input
          type='text'
          className='task-field'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* <span>{item.task}</span> */}
        <div className='time-field'>
          {item.end_time === null ? (
            ''
          ) : (
            <span>
              {moment(item.start_time).format('h:mm a')} -{' '}
              {moment(item.end_time).format('h:mm a')}{' '}
            </span>
          )}
        </div>
        <div className='task-duration'>
          {item.task_duration === null ? '' : <span>{item.task_duration}</span>}
        </div>
        <div className='task-tools'>
          <MdIcons.MdEditNote />
          <MdIcons.MdDeleteForever onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
