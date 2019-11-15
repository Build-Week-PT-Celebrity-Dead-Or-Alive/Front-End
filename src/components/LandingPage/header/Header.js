import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

// Written by Gabe Lopez

const HeaderContainer = styled.div`

`;

const Text = styled.h1`

`;

export default function Header(props){

    return(
        <HeaderContainer>
            <Text>Celebrity Dead or Alive</Text>
        </HeaderContainer>
    );
}