import React, {useContext} from 'react';
import {Web3Context} from '../contexts/Web3Context';
import DeleteCommitment from '../contracts/DeleteCommitment.json';
import getWeb3 from '../getWeb3';
function Commitment() {
  // const {web3, accts, ins} = useContext(Web3Context);
  // console.log(accts);
  // const greeting = 'All Commitments!';
  const dummy = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = DeleteCommitment.networks[networkId];
    const instance = new web3.eth.Contract(
      DeleteCommitment.abi,
      deployedNetwork && deployedNetwork.address
    );
    console.log(await instance.methods.commitments(0).call());
  };
  dummy();
  return <h1>dd</h1>;
}
export default Commitment;
