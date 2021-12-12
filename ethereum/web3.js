import Web3 from "web3";
const { passphrase, token } = require('../secrets');

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum) {
  //we are in the browser AND Metamask is running
  window.ethereum.request({method: 'eth_requestAccounts'});
  web3 = new Web3(window.ethereum);
} else {
  //We are on the server or the user doesn't have Metamask
  const provider = new Web3.providers.HttpProvider(token);
  web3 = new Web3(provider);
}
export default web3;
