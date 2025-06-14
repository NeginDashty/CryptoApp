// Search.js
import React, { useEffect, useState } from 'react';
import { SearchCoin } from '../../Services/CryptoApi';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
import { useCrypto } from '../../Context/CryptoContext';

const SearchBox = styled.div`
  margin-top: 50px;
  position: relative;
  input {
    width: 300px;
    height: 50px;
    padding: 10px;
    font-size: 1.1rem;
    color: #fff;
    background-color: #23242e;
    border: none;
    border-radius: 5px;
  }
  select {
    background-color: #23242e;
    height: 50px;
    border: none;
    border-radius: 5px;
    margin-left: 20px;
    color: #fff;
    padding: 0 10px;
  }
  select:focus {
    outline: none;
  }
`;

const SearchResult = styled.div`
  position: absolute;
  display: ${(props) => (props.show ? 'block' : 'none')};
  text-align: center;
  top: 60px;
  width: 300px;
  height: 400px;
  border-radius: 5px;
  overflow-y: scroll;
  background-color: #18181c;
  border: 2px solid #22262e;
  padding: 20px;
  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
  li {
    list-style: none;
    display: flex;
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 2px solid #22262e;
  }
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10px;
`;

function Search() {
  const [value, setValue] = useState('');
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currency, setCurrency } = useCrypto();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setCoins([]);
    if (!value) {
      setLoading(false);
      return;
    }

    const fetchCoins = async () => {
      try {
        const res = await fetch(SearchCoin(value), { signal });
        const json = await res.json();
        if (json && json.coins) {
          setCoins(json.coins);
        } else {
          alert(json.status || json.error);
        }
        setLoading(false);
      } catch (error) {
        if (error.name !== 'AbortError') alert(error.message);
      }
    };

    setLoading(true);
    fetchCoins();
    return () => controller.abort();
  }, [value]);

  return (
    <SearchBox>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search coin name..."
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      <SearchResult show={(loading || coins.length > 0) && value.trim()}>
        {loading ? (
          <RotatingLines
            visible={true}
            height="50"
            width="50"
            color="grey"
            strokeWidth="2"
            strokeColor="#3874ff"
            animationDuration="0.75"
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
  );
}

export default Search;