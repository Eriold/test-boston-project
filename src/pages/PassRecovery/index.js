import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PassRecovery = () => {
  const [emailRecovery, setEmailRecovery] = useState()

  const sendRecovery = (email) => {
    console.log(email, 'Recovery')
  }
  return (
    <>
      <div>
        <h2>Forgot Password?</h2>
        <label htmlFor='name'>
          Please insert your email
          <input
            placeholder='Recovery email'
            type='email'
            onChange={e => setEmailRecovery(e.target.value)}
          />
        </label>
        <button
          type='button'
          name='login'
          onClick={() => sendRecovery(emailRecovery)}
        >
          Send
            </button>
      </div>
      <Link to='/'>Return login</Link>
    </>
  )
};

export default PassRecovery;
