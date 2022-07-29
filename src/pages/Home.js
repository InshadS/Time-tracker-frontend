import React from 'react';
import TaskList from '../components/Task/TaskList';
import './style.css';

function Home() {
  return (
    <div className='home'>
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

export default Home;
