// src/Components/modules/TableRow.jsx
import React from "react";
import { useCrypto } from "../Context/CryptoContext";
import chartup from "../assets/chartup.png";
import chartdown from "../assets/chartdown.png";
import styled from "styled-components";
import { marketChart } from "../Services/CryptoApi";

const Symbol = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
`;

const TableRow = ({ coin, currencySymbol }) => {
  const { chart,setChart} = useCrypto();
  const { name, image, symbol, price_change_percentage_24h, current_price, total_volume, id } = coin;

  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      setChart({ ...json, coin });
    } catch (error) {
      console.log(error);
      setChart(null);
    }
  };

  return (
    <tr>
      <td>
        <Symbol onClick={showHandler}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </Symbol>
      </td>
      <td>{name}</td>
      <td>{currencySymbol}{current_price.toLocaleString()}</td>
      <td style={{ color: price_change_percentage_24h < 0 ? 'red' : 'green' }}>
        {price_change_percentage_24h.toFixed(3)}
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change_percentage_24h > 0 ? chartup : chartdown} alt={name} />
      </td>
    </tr>
  );
};

export default TableRow;
