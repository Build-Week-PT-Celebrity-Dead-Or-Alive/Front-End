import React, { useState } from 'react';
import AxiosWithAuth from '../../../Utilities/AxiosWithAuth';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../../../App.css';
import styled from 'styled-components';

const FormStyle = styled.div`
    background: #44B3C2;
    margin: 5% auto;
    width: 40%;
    border: 1px solid black;
    height: 28%;
    display: flex;
    flex-direction: column;
    border-radius: 34px;
    font-family: 'Sulphur Point', sans-serif;    
    margin-bottom: 30px;
    box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.45);
`;

const StyledH1 = styled("h1")`
    color: #fff;
    font-size: 2.4rem;
    margin-top: 3%;
    font-family: 'Supermercado One', cursive;
`;

const StyledP = styled("p")`
    color: #fff;
    font-family: 'Sulphur Point', sans-serif;
    font-size: 1.6rem;
    margin-top: 2%;
`;

const StyledLabel = styled("label")`
    margin-left: -70%;
    color: #fff;
    font-family: 'Sulphur Point', sans-serif;
`;

const StyledInput = styled("input")`
    width: 60%;
    margin: -3% auto 3% -25%;
`;

const StyledButton = styled("button")`
    margin: 2% auto;
    margin-left: -50% !important;
    border-radius: 5%;
    width: 26%;
    display: flex;
    justify-content: center;
    background-color: #F2EDD8;
    color: #5D4C46;
    font-family: 'Lobster', cursive;
`;


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
      <FormStyle>
        <StyledH1>Join Celebrity Dead or Alive!</StyledH1>
          <StyledP>Sign up today to save and compete for TOP SCORE!</StyledP>
        <Form
          className='sign-up-form' 
          onSubmit={handleSubmit}>

          {error && <div className="error">{error}</div>}

        <FormGroup row>
          <StyledLabel 
            for="username" 
            sm={2}>
              Username
          </StyledLabel>
          <Col sm={10}>
            <StyledInput 
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
          <StyledLabel 
            for="password" 
            sm={2}>
              Password
          </StyledLabel>
          <Col sm={10}>
            <StyledInput 
              type='password'
              name='password'
              placeholder='Password'
              // value and onChange
              value={signUp.password}
              onChange={handleChange} 
            />
          </Col>
        </FormGroup>
        <StyledButton className='sign-up-btn' type='submit'>Sign Up</StyledButton>
        </Form>
      </FormStyle>
    </div>
  )
}
