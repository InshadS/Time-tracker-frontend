import moment from 'moment';
import React from 'react';
import * as MdIcons from 'react-icons/md';

function TaskCard({ item }) {
  return (
    <div className='TaskCard d-flex justify-content-between align-items-center'>
      <span>{item.task}</span>
      <div className='task-duration'>
        {item.end_time === null ? (
          ''
        ) : (
          <span>
            {moment(item.start_time).format('h:mm a')} -{' '}
            {moment(item.end_time).format('h:mm a')}{' '}
          </span>
        )}
        {item.task_duration === null ? '' : <span>{item.task_duration}</span>}
        {moment(item.start_time).format('h:mm a')}
      </div>
      <div className='task-tools'>
        <MdIcons.MdEditNote />
        <MdIcons.MdDeleteForever />
      </div>
    </div>
  );
}

export default TaskCard;
