import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import AliveButton from './ChoicesButtonsandText/AliveButton';
import DeadButton from './ChoicesButtonsandText/DeadButton';

const MidText = styled.p`
    font-family: 'Supermercado One', cursive;
    font-size: 2rem;
    margin-right: 40px;
    margin-left: 40px;
`;

const ChoicesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    padding: 20px;
    margin-top: 40px;
`;

export default function Choices({handleChoice}){

    return (
        <ChoicesContainer>
            <DeadButton handleChoice={handleChoice}/>
            <MidText>OR</MidText>
            <AliveButton handleChoice={handleChoice}/>
        </ChoicesContainer>
    );
}