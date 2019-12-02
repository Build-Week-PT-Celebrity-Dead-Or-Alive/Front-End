import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
     border: 1px solid black;
     background-color: #44B3C2;
     width: 355px;
     font-family: 'Lobster', cursive;
     border-radius: 65px;
     height: 50px;
     color:  #F2EDD8; 
`;

export default function AliveButton({handleChoice}){
    return (
        <StyledButton onClick={() => handleChoice("false")}><h3>Alive</h3></StyledButton>
    )
}