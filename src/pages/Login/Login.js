import React from 'react';
import './Login.css';
import Google from '../../Assets/Google.png';
import Github from '../../Assets/Github.png';

function Login() {
  // Google
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  // GitHub
  const github = () => {
    window.open('http://localhost:5000/auth/github', '_self');
  };

  return (
    <div className='login'>
      <h1>Log in to your account</h1>
      <div className='wrapper'>
        <button className='loginButton' onClick={google}>
          <img src={Google} alt='' />
          Login via Google
        </button>
        <button className='loginButton' onClick={github}>
          <img src={Github} alt='' />
          Login via Github
        </button>
      </div>
    </div>
  );
}

export default Login;
