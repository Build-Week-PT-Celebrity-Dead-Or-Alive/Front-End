import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Celeb = styled.div`
    font-family: 'lobster', cursive;
    margin-top: 2px;
    color: #E45641;
`;

const CelebContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;


//http://celeb-death-status.herokuapp.com/api/celebs
export default function CelebsForLanding(props){
    const [celebs, setCelebs] = useState([]);
    
    useEffect(() => {        
        axios.get('https://celeb-death-status.herokuapp.com/api/celebs')
            .then(results => {setCelebs([results.data[Math.floor(Math.random() * 80)],
                                        results.data[Math.floor(Math.random() * 80)],
                                        results.data[Math.floor(Math.random() * 80)]])})
            .catch(err => {console.log(`There was an error: ${err}`)})  
     }, []);

    
    return(
        <CelebContainer>
            {celebs.map(celeb => {
                return(
                    <Celeb>
                        <h3>{celeb.name}</h3>
                        <img src={celeb.imageurl}/>
                    </Celeb> 
                )
            })}
        </CelebContainer>
    );
}