import axios from 'axios';
import colors from 'colors';

class CryptoApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://pro-api.coinmarketcap.com/";
    }

    // Function to fetch price data
    async getPriceData(coinOption, curOption) {
        try {
            if (coinOption && curOption) {
                const res = await axios.get(`${this.baseUrl}v2/tools/price-conversion?amount=1&symbol=${coinOption}&convert=${curOption}`, {
                    headers: {
                        'X-CMC_PRO_API_KEY': this.apiKey,
                    },
                });
    
                if (res.data && res.data.data && res.data.data.length > 0) {
                    const coin = res.data.data[0];
                    const output = `Coin: ${coin.symbol.yellow} (${coin.name.green}) | Price: ${coin.quote[curOption].price.toFixed(2).yellow}\n`;
                    return output;
                } else {
                    return `No data available for the requested coin: ${coinOption.red}`.red;
                }
            } else {
                console.log("Fetching latest cryptocurrency listings...");
                const res = await axios.get(`${this.baseUrl}v1/cryptocurrency/listings/latest`, {
                    headers: {
                        'X-CMC_PRO_API_KEY': this.apiKey,
                    },
                });
                const sortedPrice = res.data.data.sort((a, b) => b.quote["USD"].price-a.quote["USD"].price );
    
                let output = '';
                sortedPrice.forEach(coin => {
                    output += `Coin: ${coin.symbol.yellow} (${coin.name.green}) | ${JSON.stringify(coin.quote["USD"]?.price || "N/A").yellow}\n`;
                });
    
                return output;
            }
        } catch (error) {
            console.error(`Error fetching price data: ${error.response?.status || error.message}`.red);
            console.error(`Response: ${JSON.stringify(error.response?.data || {})}`);
            return "An error occurred while fetching price data.".red;
        }
    }
    
}

export default CryptoApi;
