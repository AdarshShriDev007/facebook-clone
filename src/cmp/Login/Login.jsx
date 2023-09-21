import React from 'react';
import "./Login.css";

const Login = () => {
  return (
    <div className='login-box'>
        <div className='login'>
            <img src='facebook.png' alt='login-logo' />
            <h3>Sign in to Facebook</h3>
            <button>login with facebook</button>
        </div>
    </div>
  )
}

export default Login;