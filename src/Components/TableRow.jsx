import React from 'react'
import chartup from "../assets/chartup.png";
import chartdown from "../assets/chartdown.png"


const TableRow=({coin})=>{
    const {name,image,symbol,price_change_percentage_24h,current_price,total_volume,}=coin;
return(
    <tr key={coin.id}> 
                        <td>
                            <div>
                                <img src={image} alt=""/>
                                <span>{symbol.toUpperCase()}</span>
                            </div>
                        </td>
                        <td>{name}</td>
                        {/* //toLocaleString سه تا سه تا ارقام رو جدا میکنه */}
                        <td>${current_price.toLocaleString( )}</td>
                         <td style={{ color: price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                            {price_change_percentage_24h.toFixed(3)}
                            </td>
                        <td>{total_volume.toLocaleString()}</td>
                        <td>
                            <img src={price_change_percentage_24h > 0 ? chartup : chartdown} alt={name}/>
                        </td>
                    </tr>
);
};

export default TableRow