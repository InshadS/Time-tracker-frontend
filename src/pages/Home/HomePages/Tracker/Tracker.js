import React from 'react';
import TaskForm from '../../../../components/Task/TaskForm';
import TaskList from '../../../../components/Task/TaskList';
import './Tracker.css';

function Tracker({ user }) {
  return (
    <div className='tracker d-flex align-items-center flex-column '>
      <div className='input-container'>
        <TaskForm />
      </div>
      <TaskList user={user} />
    </div>
  );
}

export default Tracker;
