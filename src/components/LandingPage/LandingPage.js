import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import Header from './header/Header';
import QuizLauncher from './QuizLauncher/QuizLauncher';

// Written by Gabe Lopez


// Note for later, under all of the returns there will be a random pull of celebs from api of value 3 that will be displayed
export default function LandingPage(props){

    return (
        <div>
            <Header />
            <QuizLauncher />
            {/* celebs in here later */}
        </div>
    );
}