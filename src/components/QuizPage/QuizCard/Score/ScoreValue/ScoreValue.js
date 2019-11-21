import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

export default function ScoreValue({score}){
    return(
        <h3>{score}</h3>
    )
}