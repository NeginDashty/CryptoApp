import React from 'react'

function Convertdata(data,type) {
    const convertedData=data[type].map((item)=>{
        return {
            date:item[0],
            [type]:+item[1].toFixed(2)
        }
    });
    
 return convertedData;
}

export default Convertdata;