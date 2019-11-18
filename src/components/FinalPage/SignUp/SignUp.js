import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../../Utilities/AxiosWithAuth';
import { sign } from 'crypto';


export default function SignUp() {
  const [error, setError] = useState();
  const [signUp, setSignUp]= useState({
    username: '',
    password: '',
  });

  const handleChange = e => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    AxiosWithAuth()
      .post()
      .then()
      .catch()
  }
  return (
    <div>
      <p>Hi from SignUp!</p>
      <h1>Join Celebrity Dead or Alive!</h1>
        <form>
          <input 
            type='text'
            name='username'
            placeholder='Username'
            // value and onChange
            value={signUp.username}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            // value and onChange
            value={signUp.password} 
          />
          
          <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}
