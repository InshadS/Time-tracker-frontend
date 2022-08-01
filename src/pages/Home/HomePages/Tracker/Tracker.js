import React from 'react';
import TaskList from '../../../../components/Task/TaskList';
import './style.css';

function Tracker() {
  return (
    <div className='tracker'>
      <div className='input-container'>
        <TaskList />
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
