import React, { useState } from 'react';
// import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
     border: 1px solid black;
     background-color: #E45641;
     width: 355px;
     font-family: 'Lobster', cursive;
     border-radius: 65px;
     height: 50px;
     color:  #F2EDD8; 
`;


export default function DeadButton() {
    const [deadScore, updateDeadScore] = useState(0)
    return(
        <StyledButton onClick={() => updateDeadScore(deadScore - 1)}>Dead</StyledButton>
    )
}