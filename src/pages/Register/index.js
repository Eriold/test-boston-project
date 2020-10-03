import React from 'react';
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div>
        <h2>Sign up now</h2>
        <label htmlFor='name'>
          <input placeholder='Name' type='text'></input>
        </label>
        <label htmlFor='email'>
          <input placeholder='Email' type='email'></input>
        </label>
        <label htmlFor='email'>
          <input placeholder='Password' type='password'></input>
        </label>
        <label htmlFor='email'>
          <input placeholder='Repeat password' type='password'></input>
        </label>
        <button type='button' name='login'>Register</button>
      </div>
      <Link to='/'>Return login</Link>
    </>
  )
}

export default Register;
