import React from 'react';
import TaskForm from '../../../../components/Task/TaskForm';
import './Tracker.css';

function Tracker({ user }) {
  return (
    <div className='tracker'>
      <div className='input-container'>
        <TaskForm user={user} />
      </div>
      <div className='list-container'>
        <div className='week'>
          <span>This week</span>
          <span className='week-total'>00:00:00</span>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
