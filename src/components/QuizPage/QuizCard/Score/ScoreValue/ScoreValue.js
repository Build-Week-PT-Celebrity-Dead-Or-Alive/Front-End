import React, { useState } from 'react';
// import { Route, Link } from 'react-router-dom';
// import styled from 'styled-components';

export default function ScoreValue(props) {
    const [score, updateScore] = useState(0);

    return(
        <div className="score">
            <div className="users-score">{score}</div>
        </div>
    )
}