import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Celeb = styled.div`

`;

const CelebContainer = styled.div`

`;

/*
            <Celeb>
                <h3>{celebs[0].name}</h3>
                <img src={celebs[0].imageurl}/>
            </Celeb>
            
            <Celeb>
                <h3>{celebs[1].name}</h3>
                <img src={celebs[1].imageurl}/>
            </Celeb>
            
            <Celeb>
                <h3>{celebs[2].name}</h3>
                <img src={celebs[2].imageurl}/>
            </Celeb>
*/


//http://celeb-death-status.herokuapp.com/api/celebs
export default function CelebsForLanding(props){
    let celebs = [];
    const [celebApi, setCelebApi] = useState([]);
    let randomEntries = [];
    
    const pickCelebs = () => {
        for(let i = 0; i < 3; i++){
            randomEntries.push(Math.floor(Math.random() * 80));
        }
        console.log('celebap', celebApi);
        console.log('random array',randomEntries);
        console.log('Celeb', celebApi[0]);
        console.log('Celeb with random', celebApi[randomEntries[0]])
        celebs = [celebApi[1], celebApi[4], celebApi[5]];  
        console.log(celebs);
    }

    useEffect(() => {        
        axios.get('http://celeb-death-status.herokuapp.com/api/celebs')
            .then(results => {setCelebApi(results.data)})
            .catch(err => {console.log(`There was an error: ${err}`)})  
     }, []);

      useEffect(() => {
          pickCelebs();
     }, [celebApi]); 

    
    return(
        <CelebContainer>

        </CelebContainer>
    );
}