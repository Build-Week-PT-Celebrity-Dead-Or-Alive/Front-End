import React from 'react';
import styled from 'styled-components';

const FormStyle=styled.div`
    background: #44B3C2;
    width: 40%;
    border: 1px solid black;
    height: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 34px;
    font-family: 'Supermercado One', cursive;
    margin-bottom: 30px;
    box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.45);
`;

const Form = () => {

    return (

    <FormStyle>
        <form className="sign-up" > 
            <label>Email</label>
            <input className="input-form" id="email" type="text" name="email" placeholder="yourname@example.com" />
            <label>Password</label>
            <input className="input-form" id="password" type="password" name="password" placeholder="Enter your Password" />
            <button className="submit-button">Submit</button>
        </form>
    </FormStyle>
    )

};

export default Form;
