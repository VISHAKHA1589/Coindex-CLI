import KeyManager from '../lib/KeyManager.js';
import inquirer from 'inquirer';
import colors from 'colors';
import isRequired  from '../utils/validation.js';


const key = {
    async set(){
        const keyManager= new KeyManager();
        const input= await inquirer.prompt([
            {
                type: "input",
                name: "key",
                message: "Enter API Key".green + "https://pro.coinmarketcap.com/account",
                validate: isRequired
            }
        ]);


        const key= keyManager.setKey(input.key);


        if(!key){
            console.log("API Key Set".blue);
        }


    },
    show(){
        try{
            const keyManager= new KeyManager();
            const key= keyManager.getKey();


            console.log( "current api key", key.yellow)
        }
        catch(err){
            console.error(err.message.red);

        }
    }
    ,
    remove(){
        try{
            const keyManager= new KeyManager();
            keyManager.deleteKey();


            console.log( "key removed".red)
        }
        catch(err){
            console.error(err.message.red);

        };
    }
}

export default key;