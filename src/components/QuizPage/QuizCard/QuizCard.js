import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import Choices from './Choices/Choices';
import ScoreDisplay from './Score/ScoreDisplay';
import TimerDisplay from './Timer/TimerDisplay';
import Celebrity from '../../Celebrity/Celebrity';
import axios from 'axios';
import Header from '../../LandingPage/header/Header';

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
    border: 2px dashed #F1A94E;
    width: 70%;
    margin: 0 auto;
    padding: 30px;
    border-radius: 65px;
    height: 80%;
`;


export default function QuizCard({celebs, score, updateScore}){
    const [randomCeleb, setRandomCeleb] = useState({});

    useEffect(() => {
        setRandomCeleb(celebs[Math.floor(Math.random() * 80)]);
    } ,[])

    function handleChoice(dead){
        if (dead === randomCeleb.dead){
            updateScore();

        }
        setRandomCeleb(celebs[Math.floor(Math.random() * 80)]);

    }


    return (
        <QuizCardHolder>
            <TopHalf>
                <ScoreDisplay score={score}/>
                <Celebrity imageurl={randomCeleb.imageurl} name={randomCeleb.name}/>
                <TimerDisplay />
            </TopHalf>
            <BottomHalf>
                <Choices handleChoice={handleChoice}/>
            </BottomHalf>
            <Header />
        </QuizCardHolder>
    );
}