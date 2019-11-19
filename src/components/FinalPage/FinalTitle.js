import React from 'react';
import styled from 'styled-components';

const Title=styled.div`
    height: 100;
    margin-bottom: 40px;
    width: 50%;
    border: 1px solid black;
    box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.50);
    background: #44B3C2;
    color: #F2EDD8;
    border-radius: 50px;
    font-family: 'SuperMercado One', cursive;
    h3{
        font-size: 30px;
    }
`;

const Head = () => {

    return (

        <Title>
            <h3>Celebrity Dead or Alive</h3>
        </Title>
    );
}

export default Head;