import React from 'react';

function TaskCard({ item }) {
  return (
    <div className='TaskCard'>
      <span>{item.task}</span>
    </div>
  );
}

export default TaskCard;
