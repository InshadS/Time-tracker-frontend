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
      <span className='login-logo'>time tracker</span>

      <div className='wrapper'>
        <h1>Log in to your account</h1>
        <button
          className='loginButton d-flex align-items-center'
          onClick={google}
        >
          <img src={Google} alt='' />
          <span>Login via Google</span>
        </button>
        <button
          className='loginButton d-flex align-items-center'
          onClick={github}
        >
          <img src={Github} alt='' />
          <span>Login via Github</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
