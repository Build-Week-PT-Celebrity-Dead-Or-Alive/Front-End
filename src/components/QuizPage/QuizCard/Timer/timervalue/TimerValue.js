import React, {useEffect, useState} from 'react';

export default function TimerValue(history){
    const [time, setTime] = useState(120);
    let tempTime = 120;

    function countDown(){
        var Countdown = setInterval(function(){
            if (tempTime <= 0){
                tempTime = 0;
                history.history.history.push("/finalpage");
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