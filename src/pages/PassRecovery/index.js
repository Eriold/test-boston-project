import React from 'react';
import { Link } from 'react-router-dom';

const PassRecovery = () => {
  return (
    <>
      <div>
        <h2>Forgot Password?</h2>
        <label htmlFor='name'>
          Please insert your email
          <input placeholder='Recovery email' type='text'></input>
        </label>
        <button type='button' name='login'>Send</button>
      </div>
      <Link to='/'>Return login</Link>
    </>
  )
};

export default PassRecovery;
