import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x935F7b73c500D36Bc455F230F7cF32F055A1e86c'
);

export default instance;
