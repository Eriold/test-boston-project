import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => (
  <>
    <div>
      <h2>Login Now</h2>
      <label htmlFor='email'>
        <input placeholder='Email' type='email'></input>
      </label>
      <label htmlFor='pass'>
        <input placeholder='Password' type='password'></input>
      </label>
      <Link to='/PassRecovery'>Forgot password?</Link>
      <button type='button' name='login'>Login</button>
    </div>
    <Link to='/Register'>Sign up now</Link>
  </>
);

export default Login;
