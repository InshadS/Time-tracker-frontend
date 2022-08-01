import React from 'react';
import Google from '../../Assets/Google.png';
import Github from '../../Assets/Github.png';

function Login() {
  return (
    <div>
      <h1>Choose a login method</h1>
      <div className='wrapper'>
        <button className='loginButton'>
          <img src={Google} alt='' />
          Google
        </button>
        <button className='loginButton'>
          <img src={Github} alt='' />
          Github
        </button>
      </div>
    </div>
  );
}

export default Login;
