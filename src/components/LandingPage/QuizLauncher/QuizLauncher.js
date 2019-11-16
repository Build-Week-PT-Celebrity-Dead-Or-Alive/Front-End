import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

// Written by Gabe Lopez

const LauncherButton = styled.button`

`;

const Text = styled.h3`

`;

export default function QuizLauncher(props){

    return(
        <LauncherButton><Text></Text></LauncherButton>
    );
}