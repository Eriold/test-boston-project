import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [repeatPass, setRepeatPass] = useState()

  const sendRegister = (name, email, pass, repeatPass) => {

    if (pass === repeatPass) {
      return console.log(name, email, pass, repeatPass)
    } else {
      return console.log('the password must be the same')
    }
  }
  return (
    <>
      <div>
        <h2>Sign up now</h2>
        <label htmlFor='name'>
          <input
            placeholder='Name'
            type='text'
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          <input
            placeholder='Email'
            type='email'
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          <input
            placeholder='Password'
            type='password'
            onChange={e => setPass(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          <input
            placeholder='Repeat password'
            type='password'
            onChange={e => setRepeatPass(e.target.value)}
          />
        </label>
        <button
          type='button'
          name='login'
          onClick={() => sendRegister(name, email, pass, repeatPass)}
        >
          Register
          </button>
      </div>
      <Link to='/'>Return login</Link>
    </>
  )
}

export default Register;
