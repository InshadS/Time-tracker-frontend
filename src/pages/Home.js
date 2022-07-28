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
    </div>
  );
}

export default Home;
