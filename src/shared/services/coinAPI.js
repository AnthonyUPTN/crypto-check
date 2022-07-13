import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/markets",
  params: {
    sparkline: false,
    per_page: 100,
    vs_currency: "cad",
    order: "market_cap_desc",
  },
});

const fetchCoins = async () => {
  const { data } = await instance.get("/", {
    params: {
      page: 1,
    },
  });

  return data;
};

export default fetchCoins;
