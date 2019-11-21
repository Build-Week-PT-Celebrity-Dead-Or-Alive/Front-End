import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import TimerValue from './timervalue/TimerValue';

const TimerContainer = styled.div`
    width: 355px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 65px;
    background-color: #E45641;
    color:  #F2EDD8;
    font-family: 'Lobster', cursive;  
`;
 

export default function TimerDisplay(){
    return(
        <TimerContainer>
            <h3>Time remaining:</h3>
            <TimerValue />
        </TimerContainer>
    );
}