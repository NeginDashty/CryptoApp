import React from 'react'
import chartup from "../../assets/chartup.png";
import chartdown from "../../assets/chartdown.png"
import TableRow from '../TableRow';

function TableCoin({coins , isloading}) {
    console.log(isloading)
    
  return (
    <div>
       
        {/* {isloading ? <p>Loading ...</p> : ( */}
             <table>
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
                   < TableRow coin={coin} key={coin.id}/>
                )})}
            </tbody>
        </table>
        {/* )} */}
    </div>
  )
}

export default TableCoin;
