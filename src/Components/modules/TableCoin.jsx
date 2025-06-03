import React from 'react'
import chartup from "../../assets/chartup.png";
import chartdown from "../../assets/chartdown.png"
import TableRow from '../TableRow'; 
import styled from "styled-components"

const Container=styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0 100px;

`;

const Table=styled.table`
    width: 100%;
    border-collapse: collapse;
    thead{
        border-bottom: 2px solid #fff;
        padding-bottom: 20px;
    }
    th{
        font-size: 1.2rem;
        text-align: left;
        padding: 10px 0;
        
    }
    tbody tr{
        height: 80px;
        border-bottom: 1px solid #22262e;
        font-weight: 600;
        font-size: 1.1rem;
    }

    @media (max-width: 600px) {
    display: block;
    overflow-y: scroll;

    th, td {
      padding: 0 10px;
      font-size: 1rem;
    }

    tbody tr {
      font-size: 0.95rem;
      height: auto;
    }
  }

   
`;


function TableCoin({coins , isloading,currencySymbol,setChart}) {
    console.log(isloading);
    
  return (
    <Container>
       
        {/* {isloading ? <p>Loading ...</p> : ( */}
             <Table>
            <thead>
                <tr> 
                <th>Coin</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Total Volum</th>
                <th></th>
                </tr>
                </thead>
            <tbody>
                {coins.map((coin)=>{
                    return(
                   < TableRow coin={coin} key={coin.id} currencySymbol={currencySymbol} setChart={setChart}/>
                )})}
            </tbody>
        </Table>
        {/* )} */}
    </Container>
  )
}

export default TableCoin;
