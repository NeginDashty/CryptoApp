import axios from "axios";

const BASE_URL="https://api.coingecko.com/api/v3";
const APIKEY="CG-HvbigyLWK83GAXJpiMjV64YY";

const Api=()=>{
    return `${BASE_URL}/coins/markets?vs_currency=usd&order-market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=${APIKEY}`;
};

async function GetCoins() {
    try {
        const res=await axios.get(Api());
        const data=await res.data;
        return data;

    } catch (error) {
        console.log(error);
        return [];
    }
};

export default GetCoins;