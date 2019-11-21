import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

export default function TimerValue(){
    const [time, setTime] = useState(120);
    let tempTime = 120;

    function countDown(){
        var Countdown = setInterval(function(){
            --tempTime;
            setTime(tempTime);
            if (tempTime === 0){
                setTime(0);
            }
        }, 600)
    }

    useEffect(() => {countDown()} ,[])

    return(
        <h3>{time}</h3>
    )
}