import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

export default function TimerValue(){
    const [time, setTime] = useState(120);
    let tempTime = 120;

    function countDown(){
        var Countdown = setInterval(function(){
            if (tempTime <= 0){
                tempTime = 0;
            } else {
                --tempTime;
                setTime(tempTime);
            }
        }, 600)
    }

    useEffect(() => {countDown()} ,[])

    return(
        <h3>{time}</h3>
    )
}