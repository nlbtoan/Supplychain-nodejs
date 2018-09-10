import * as dotenv from 'dotenv';
import web3 from './web3';

dotenv.load({ path: '.env' });

const address = null;

const abi = null;

export default new web3.eth.Contract(abi, address);
