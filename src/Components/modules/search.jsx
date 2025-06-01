import React, { useEffect, useState } from 'react';
import { SearchCoin } from '../../Services/CryptoApi';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';


const SearchBox=styled.div`
  margin-top: 50px;
  position: relative;
  input{
    width: 300px;
    height: 50px;
    padding: 10px;
    font-size: 1.1rem;
    color: #fff;
    background-color: #23242e;
    border: none;
    border-radius: 5px;
  }
  select{
    background-color: #23242e;
    height: 50px;
    border: none;
    border-radius: 5px;
    margin-left: 20px;
    color: #fff;
    padding: 0 10px;
  }
  select:focus{
    outline: none;
  }
`;


const SearchResult=styled.div`
  position: absolute;
  text-align: center;
  top: 60px;
  width: 300px;
  height: 400px;
  border-radius: 5px;
  overflow-y: scroll;
  background-color: #18181c;
  border: 2px solid #22262e;
  padding: 20px;
  display: ${(props) => (props.show ? 'block' : 'none')};
  ::-webkit-scrollbar{
    width: 0;
    background-color: transparent;
  }
  li{
    list-style: none;
    display: flex;
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 2px solid #22262e;
  }
`;

const Img=styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10px;
`

function Search({ currency, setCurrency }) {
  const [value, setValue] = useState('');
  const [coins, setCoins] = useState([]);
  const [loading,setLoading]=useState(false);

  const fetching = async (signal) => {
  const res = await fetch(SearchCoin(value), { signal });
  const status = res.status;
  const json = await res.json();

    return { json, status }; // ✅ همیشه این دو تا رو برگردون
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setCoins([]);
    if (!value) {
      setLoading(false);
      return;
    };

    const search = async () => {
      try {
        const { json, status } = await fetching(signal);

        if (json && json.coins) {
        setCoins(json.coins);
        setLoading(false);
        console.log(coins);
        } else {
          alert(json.status || json.error || `Error: ${status}`); // ✅ پیام خطا
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          alert(error.message);
        }
      }
    };

    setLoading(true);
    search();

    return () => {
      controller.abort();
    };
  }, [value]);

  return (
    <>
      <SearchBox>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Search coin name..."
        />
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>

     <SearchResult show={coins.length > 0 && value .trim() !== ''}>
  {loading ? (
        <RotatingLines
      visible={true}
      height="50"
      width="50"
      color="grey"
      strokeWidth="2"
      strokeColor='#3874ff'
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />
  ) : (
    <ul>
      {coins.map((coin) => (
        <li key={coin.id}>
          <Img src={coin.thumb} alt={coin.name} />
          <p>{coin.name}</p>
        </li>
      ))}
    </ul>
  )}
</SearchResult>
  </SearchBox>
    </>
  );
}

export default Search;
