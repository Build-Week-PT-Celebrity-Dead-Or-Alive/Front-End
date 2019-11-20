import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import Choices from './Choices/Choices';
import ScoreDisplay from './Score/ScoreDisplay';
import TimerDisplay from './Timer/TimerDisplay';
import Celebrity from '../../Celebrity/Celebrity';

const BottomHalf = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: nowrap;
`;

const TopHalf = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: nowrap;
`;


const QuizCardHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    border: 1px solid black;
    width: 80%;
    margin: 0 auto;
    padding: 30px;
    border-radius: 65px;
    height: 80%;
`;

export default function QuizCard(){

    return (
        <QuizCardHolder>
            <TopHalf>
                <ScoreDisplay />
                <Celebrity />
                <TimerDisplay />
            </TopHalf>
            <BottomHalf>
                <Choices />
            </BottomHalf>
        </QuizCardHolder>
    );
}