import React from 'react';
import TaskList from '../../../../components/Task/TaskList';
import './Tracker.css';

function Tracker({ user }) {
  return (
    <div className='tracker d-flex'>
      <TaskList user={user} />
    </div>
  );
}

export default Tracker;
