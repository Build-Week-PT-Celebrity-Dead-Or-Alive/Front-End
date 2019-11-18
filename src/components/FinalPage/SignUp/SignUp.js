import React, { useState } from 'react';
import AxiosWithAuth from '../../../Utilities/AxiosWithAuth';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../../../App.css';


export default function SignUp(props) {
  const [error, setError] = useState();
  const [signUp, setSignUp]= useState({
    username: '',
    password: ''
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
      .post("/register", signUp)
      .then(result => {
        props.history.push("/login")
        console.log("User has registered", result.data)
      })
      .catch(err => {
        setError(err.response)
        // console.log('Error Signup', err)
      })
  }
  return (
    <div className='sign-up-wrapper'>
      <h1>Join Celebrity Dead or Alive!</h1>
        <p>Sign up today to save and compete for TOP SCORE!</p>
      <Form
        className='sign-up-form' 
        onSubmit={handleSubmit}>

        {error && <div className="error">{error}</div>}

      <FormGroup row>
        <Label 
          for="username" 
          sm={2}>
            Username
        </Label>
        <Col sm={10}>
          <Input 
            type='text'
            name='username'
            placeholder='Username'
            // value and onChange
            value={signUp.username}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label 
          for="password" 
          sm={2}>
            Password
        </Label>
        <Col sm={10}>
          <Input 
            type='password'
            name='password'
            placeholder='Password'
            // value and onChange
            value={signUp.password}
            onChange={handleChange} 
          />
        </Col>
      </FormGroup>
      <Button className='sign-up-btn' type='submit'>Sign Up</Button>
      </Form>
    </div>
  )
}
