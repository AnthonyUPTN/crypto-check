import { useEffect, useState } from "react";
import "./App.css";

import SearchBar from "./components/SerchBar/SearchBar";
import Coin from "./components/Coin/Coin";

import fetchCoins from "./shared/services/coinAPI";

function App() {
  const [data, setData] = useState({
    coins: [],
    loading: false,
    error: null,
    query: "",
  });

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      loading: true,
    }));
    const fetchCoinsData = async () => {
      try {
        const data = await fetchCoins();
        setData((prev) => ({
          ...prev,
          coins: data,
          loading: false,
        }));
      } catch (error) {
        setData((prev) => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchCoinsData();
  }, []);

  const { coins, loading, error, query } = data;

  const filteredCoins = coins.filter((el) =>
    el.name.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <>
      <SearchBar setQuery={setData} />
      {loading && <p>...Loading</p>}
      <Coin data={filteredCoins} />
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
