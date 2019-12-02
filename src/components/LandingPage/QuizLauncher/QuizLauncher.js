import React from 'react';
import styled from 'styled-components';

// Written by Gabe Lopez

const LauncherButton = styled.button`
    width: 20%;
    border: 1px solid black;
    border-radius: 64.5px;
    margin-top: 40px;
    background-color: #E45641;
`;

const Text = styled.h3`
    font-family: 'Lobster', cursive;
    color: #F2EDD8;
    font-size: 1.5rem;
`;

export default function QuizLauncher(props){
    const routeToQuiz = () => {
        props.history.push('/quizpage');
    }

    return(
        <LauncherButton onClick={() => {routeToQuiz();}}>
            <Text>Take the Quiz!</Text>
        </LauncherButton>
    );
}