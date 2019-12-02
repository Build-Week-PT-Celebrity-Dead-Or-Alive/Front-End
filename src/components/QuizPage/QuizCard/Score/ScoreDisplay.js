import React from 'react';
import styled from 'styled-components';
import ScoreValue from './ScoreValue/ScoreValue';

const ScoreContainer = styled.div`
    width: 355px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 65px;
    background-color: #44B3C2;
    color:  #F2EDD8;
    font-family: 'Lobster', cursive;    
`;

export default function ScoreDisplay({score}){
    
    return(
        <ScoreContainer>
            <h3>Score:</h3>
            <ScoreValue score={score}/>
        </ScoreContainer>
    )
}