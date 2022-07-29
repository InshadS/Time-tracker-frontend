import React from 'react';
import './style.css';

function Home() {
  return (
    <div className='home'>
      <div className='input-container'>
        <input type='text' placeholder='What are you working on?' />
        <span>00:00:00</span>
        <button>Start</button>
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
