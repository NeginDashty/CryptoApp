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

const Name=styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px 30px;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;

    img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
    p{
        font-size: 1.5rem;
        font-weight: 700;
    }

`;

const Types=styled.div`
    margin-top: 30px;
    button{
        margin: 10px 20px;
        background-color: ${(props)=>(props.active ?'#3874ff':'#18181cdb')};
        border: 1px solid #3874ff;
        
        color: ${(props)=>(props.active?'#fff':'#3874ff')};
        font-size: 1rem;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;

    }

   
`;

const Details=styled.div`
    display: flex;
    justify-content: space-between;
     div{
        display: flex;
        font-size: 1.1rem;
    }
    p{
        margin-right: 7px;
        color: #3874ff;
        font-weight: 700;
    }
`;
//یه استیتی داریم که تایپ نگه میداره اون استیپ رو به عنوان پراپس دادیم به 
// کامپوننتی که با چیزی که تو اون استیت هست فچ میکنه به ای پی ای
//و یه فانکشن کلیک نوشتیم برای دکمه که ایونت تارگت اینر تکست رو میگیره
//و ست تایپ میکنه ایونت تارگت اینر تکست


function Chart({chart,setChart}) {
    const [type,setType]=useState('prices');
    console.log(chart);

    const convertedData=Convertdata(chart,type);
    const closeModal=()=>{
        setChart(null);
    };
    const typeHandler=(event)=>{
            if (event.target.tagName==='BUTTON') {
                const type=event.target.innerText.toLowerCase().replace(" ","_");
                console.log(type);
                setType(type)
            }
        
    };
  return (
    <Container>
        <Cross onClick={closeModal}>X</Cross>
        <ChartContainer>
            <Name>
                <img src={chart.coin.image} alt={chart.coin.name}/>
                <p>{chart.coin.name}</p>
            </Name>
            <Garf>   
               <ChartComponent data={convertedData} type={type}/>
            </Garf>
            <Types onClick={typeHandler}>
                <button active={type==='prices'}> Prices </button>
                <button active={type==='market_caps'}> Market Caps </button>
                <button active={type==='total_volumes'}> Total Volumes </button>
            </Types>
            <Details>
            <div>
                <p>Prices: </p>
                <span>${chart.coin.current_price}</span>
            </div>
               
            </Details>
            <Details>
                <div>
                    <p>ATH: </p>
                    <span>${chart.coin.ath}</span>
                </div>
            </Details>
            <Details>
                <div>
                <p>Market Cap: </p>
                <span>{chart.coin.market_cap}</span>
                </div>
            </Details>
        </ChartContainer>
    </Container>
  )
};

export default Chart;
const ChartComponent = ({ data, type }) => { // Destructure props here
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey={type} stroke='#3874ff' strokeWidth="2px" />
                    <CartesianGrid stroke='#404042' />
                    <YAxis domain={['auto', 'auto']} /> {/* Keep this here for the YAxis */}
                    <XAxis dataKey={type} />
                    <Legend />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};
