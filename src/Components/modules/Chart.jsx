import React from 'react'
import styled from 'styled-components'
import Convertdata from '../../Helpers/convertdata';

const Container=styled.div`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     backdrop-filter: blur(3px);
`;

const Cross=styled.span`
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: #d33636;
    color: #fff;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    margin:  30px 0 0 30px;
    border-radius: 5px;
    cursor: pointer;
    :hover{
        background-color: #ce4f4f;
    }
    
`;

const ChartContainer=styled.div`
    width: 800px;
    margin:  auto;
    padding: 20px;
    margin-top: 50px;
    background-color: #18181ce6;
    border: 2px solid #404042;
    border-radius: 20px;
`


function Chart({chart,setChart}) {
    console.log(`Chart data ${chart}`);
    console.log('convert data fun ',Convertdata(chart));
    const closeModal=()=>{
        setChart(null);
    };
  return (
    <Container>
        <Cross onClick={closeModal}>X</Cross>
        <ChartContainer>

        </ChartContainer>
    </Container>
  )
}

export default Chart