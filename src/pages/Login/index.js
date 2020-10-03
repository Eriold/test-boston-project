import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()

  const sendlog = (email, pass) => {

    if (email === 'admin@gmail.com' && pass === '123') {
      return console.log('Login true')
    } else {
      console.log(`User doens't exist, please try again or register`)
    }
  }

  return (<>
    <div>
      <h2>Login Now</h2>
      <label htmlFor='email'>
        <input
          placeholder='Email'
          type='email'
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor='pass'>
        <input
          placeholder='Password'
          type='password'
          onChange={e => setPass(e.target.value)}
        />
      </label>
      <Link to='/PassRecovery'>Forgot password?</Link>
      <button
        type='button'
        name='login'
        onClick={() => sendlog(email, pass)}>
        Login
        </button>
    </div>
    <Link to='/Register'>Sign up now</Link>
  </>)
};

export default Login;
