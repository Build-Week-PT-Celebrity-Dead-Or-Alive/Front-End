import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Form from './LoginForm'
import Login from "./Login/Login";
import Head from './FinalTitle'

const Body=styled.body`
    height: 100vh;
    margin: 0;
    padding: 0;
    background: #F2EDD8;
    background-image: url("https://www.transparenttextures.com/patterns/cream-pixels.png");

`;

const Main=styled.div`
    margin: 0;
    padding: 50px 0px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    font-family: 'Satisfy', cursive;
    h1{
        font-size: 40px;
    }
    h2{
        font-family: 'Supermercado One', cursive;
    }

`;

const Content = (score)=> {
    console.log(score);
    return ( 
        <Body>
            <Main>
                <Head/>
                <h1>You scored<br/>{score.score.score}</h1>
                <h2>Sign up or log in to keep your score</h2>
                <Login/>
                <Link to="/quizpage" className="try-again-button">Try Again!</Link>
            </Main>
        </Body>
    );
}

export default Content;
