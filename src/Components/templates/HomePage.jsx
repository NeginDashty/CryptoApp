import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoin from '../modules/TableCoin';
import GetCoins from '../../Services/CryptoApi';


function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await GetCoins();
      setCoins(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Top 20 Coins</h2>
      <TableCoin  coins={coins} />
    </div>
  );
}

export default HomePage;
