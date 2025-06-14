import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoin from '../modules/TableCoin';
import {GetCoins,SearchCoin} from '../../Services/CryptoApi';
import {RotatingLines} from "react-loader-spinner"
import Pagination from '../modules/pagination';
import Search from '../modules/search';
import Chart from '../modules/Chart.jsx';
import { useCrypto } from '../../Context/CryptoContext.jsx';


function HomePage() {
  // const [coins, setCoins] = useState([]);
  // const [loadding , setLoading]=useState(true);
  // const [page,setPage]=useState(1);
  // const [currency,setCurrency]=useState('usd');
  // const [value,setValue]=useState('');
  // const [chart,setChart]=useState(null);
  // const currencySymbol = currency === 'usd' ? '$' :
  // currency === 'eur' ? '€' :
  // currency === 'jpy' ? '¥' : '$';


  // useEffect(() => {
  //   setLoading(true);
  //   const getData = async () => {
  //   try {
  //   const data = await GetCoins(page,currency);
  //   setCoins(data);
  //   setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   };
  //   getData();
  // }, [page,currency]);
  //یعنی هر وقت پیج تغییر کرد افکت رو دوباره اجرا کن
  const {loadding,chart}=useCrypto();
  
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
    <>
     <div>
      {/* <Search currency={currency} setCurrency={setCurrency} /> */}
      <Search/>
      {/* <TableCoin  coins={coins} isloading={loadding} currencySymbol={currencySymbol} setChart={setChart}/> */}
      <TableCoin/>
      {/* <Pagination page={page} setPage={setPage}/> */}
      <Pagination/>
    </div>
    {/* !!==Boolean== it means if the next state was truthy */}
     {!!chart && <Chart />}
    </>
  );
}

export default HomePage;
