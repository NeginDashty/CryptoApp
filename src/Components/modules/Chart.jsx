import React, { useState } from 'react'
import styled from 'styled-components'
import Convertdata from '../../Helpers/convertdata';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



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
`;

const Garf=styled.div`
    width: 760px;
    height: 300px;
`; 


function Chart({chart,setChart}) {
    const [type,setType]=useState('prices');
    console.log(`Chart data ${chart}`);

    const convertedData=Convertdata(chart,type);
    console.log(convertedData,'converted data');
    const closeModal=()=>{
        setChart(null);
    };
  return (
    <Container>
        <Cross onClick={closeModal}>X</Cross>
        <ChartContainer>
            <Garf>   
               <ResponsiveContainer width="100%" height="100%">
                <LineChart width={400} height={400} data={convertedData}>
                    <Line type="monotone" dataKey={type} stroke='#3874ff' strokeWidth="2px" />
                       <CartesianGrid stroke='#404042' />
                       <YAxis dataKey={type} domain={['auto','auto']} /> {/* اینو درست اینجا بذار */}
                       <XAxis dataKey={type} />
                       <Legend/>
                    </LineChart>
                </ResponsiveContainer>

            </Garf>
        </ChartContainer>
    </Container>
  )
}

export default Chart