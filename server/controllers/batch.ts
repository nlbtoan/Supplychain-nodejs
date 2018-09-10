import * as dotenv from 'dotenv';
import Batch from '../models/batch';
import BaseCtrl from './base';
import IPFS = require('ipfs-mini');
import web3 from './web3';
import goodschain from './goodschain';

dotenv.load({ path: '.env' });

export default class StageCtrl extends BaseCtrl {
  model = Batch;
  ipfs = new IPFS({ host: process.env.IPFS_URI, port: 5001, protocol: 'https' });

  // Step: 1
  // URL: api/getHash
  getHash = (req, res) => {
    console.log(req.body);
  }

  // Step: 2
  // URL: api/getdata
  getData = (req, res) => {
    console.log(req.body);
  }

  // Step: 3
  // URL: api/verifydata
  verifyData = async (req, res) => {
    console.log(req.body);
  }

}
