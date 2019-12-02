import React from 'react';
import styled from 'styled-components';

// Written by Gabe Lopez

const HeaderContainer = styled.div`
    border: 1px solid black;
    border-radius: 66px;
    width: 40%;
    margin: 0 auto;
    margin-top: 40px;
    background-color: #44B3C2;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.h1`
    font-family: 'Supermercado One', cursive;
    font-size: 3rem;
    color: #F2EDD8;
`;

export default function Header(props){

    return(
        <HeaderContainer>
            <Text>Celebrity Dead or Alive</Text>
        </HeaderContainer>
    );
}