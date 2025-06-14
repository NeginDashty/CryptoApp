// src/context/CryptoContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { GetCoins } from "../Services/CryptoApi";

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  const currencySymbol =
    currency === "usd" ? "$" :
    currency === "eur" ? "€" :
    currency === "jpy" ? "¥" : "$";

  useEffect(() => {
    setLoading(true);
    const fetchCoins = async () => {
      try {
        const data = await GetCoins(page, currency);
        setCoins(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [page, currency]);

  return (
    <CryptoContext.Provider value={{
      coins,
      setCoins,
      loading,
      page,
      setPage,
      currency,
      setCurrency,
      currencySymbol,
      chart,
      setChart
    }}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCrypto = () => useContext(CryptoContext);
