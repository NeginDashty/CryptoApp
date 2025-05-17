import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoin from '../modules/TableCoin';
import GetCoins from '../../Services/CryptoApi';
import {RotatingLines} from "react-loader-spinner"

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loadding , setLoading]=useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await GetCoins();
      setCoins(data);
      setLoading(false);
    };
    getData();
  }, []);
  
  if (loadding) {
    return(
      <>
      <div>
       
    <RotatingLines
  visible={true}
  height="96"
  width="96"
  color="grey"
  strokeWidth="3"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
      </div>
      </>
    )
  }
  return (
    <div>
      <TableCoin  coins={coins} isloading={loadding} />
    </div>
  );
}

export default HomePage;
