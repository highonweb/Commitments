import React, {createContext, useState, useEffect} from 'react';
import DeleteCommitment from '../contracts/DeleteCommitment.json';
import getWeb3 from '../getWeb3';

export const Web3Context = createContext();

function Web3ContextProvider(props) {
  const [web3, setweb3] = useState({});
  const [accts, setaccts] = useState({});
  const [ins, setins] = useState({});
  useEffect(() => {
    async function w3() {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = DeleteCommitment.networks[networkId];
      const instance = new web3.eth.Contract(
        DeleteCommitment.abi,
        deployedNetwork && deployedNetwork.address
      );
      setins(instance);
      setweb3(web3);
      setaccts(accounts);
    }
    w3();
  }, []);

  return (
    <Web3Context.Provider value={{web3, accts, ins}}>
      {props.children}
    </Web3Context.Provider>
  );
}

export default Web3ContextProvider;
