import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9571aF01B65A5755440051e4b9019dA71879a02d'
);

export default instance;
