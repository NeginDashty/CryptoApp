import React from 'react'
import chartup from "../../assets/chartup.png";
import chartdown from "../../assets/chartdown.png"



function TableCoin({coins}) {
    console.log(coins);
  return (
    <div>
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
                    <tr key={coin.id}> 
                        <td>
                            <div>
                                <img src={coin.image} alt=""/>
                                <span>{coin.symbol.toUpperCase()}</span>
                            </div>
                        </td>
                        <td>{coin.name}</td>
                        {/* //toLocaleString سه تا سه تا ارقام رو جدا میکنه */}
                        <td>${coin.current_price.toLocaleString( )}</td>
                         <td style={{ color: coin.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                            {coin.price_change_percentage_24h.toFixed(3)}
                            </td>
                        <td>{coin.total_volume.toLocaleString()}</td>
                        <td>
                            <img src={coin.price_change_percentage_24h > 0 ? chartup : chartdown} alt={coin.name}/>
                        </td>
                    </tr>
                )})}
            </tbody>
        </table>
    </div>
  )
}

export default TableCoin