import KeyManager from "../lib/KeyManager.js";
import CryptoApi from "../lib/CryptoApi.js";

const check={
    async price(cmd){
        try{
            const keyManager= new KeyManager();
            const key= keyManager.getKey();

            const api= new CryptoApi(key);
            const priceOutputData= await api.getPriceData(cmd.coin, cmd.curr);
            console.log(priceOutputData);
            
        }catch(err){
            console.error("err.message.red");

        }
        
    }
};

export default check;