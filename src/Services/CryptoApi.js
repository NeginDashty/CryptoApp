import axios from "axios";

const BASE_URL="https://api.coingecko.com/api/v3";
const APIKEY="CG-HvbigyLWK83GAXJpiMjV64YY";

const Api=(page,currency)=>{
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&order-market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${APIKEY}`;
};

async function GetCoins(page,currency) {
    try {
        const res=await axios.get(Api(page,currency));
        const data=await res.data;
        return data;

    } catch (error) {
        console.log(error);
        return [];
    }
};

const SearchCoin=(query)=>{
    return ` ${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${APIKEY} `;
};

const marketChart=(coin)=>{
return`${BASE_URL}/coins/${coin}/market_chart/?vs_currency=usd&days=7 `;
};











export {SearchCoin,GetCoins,marketChart};