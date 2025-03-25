import { program } from 'commander';
import check from '../commands/check.js';

program 
    .command('price')
    .description('check price of coins')
    .option('--coin <type>', 'Add specific coin types in csv format')
    .option('--curr <currency>', 'Change the currency', 'USD')
    .action((cmd)=> check.price(cmd));

program.parse(process.argv);



