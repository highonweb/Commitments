import React, { useState, useEffect, useContext } from "react";
import Commitment from "./Commitment";
import { Web3Context } from "../contexts/Web3Context";

function PendingContract() {
  const { web3, ins, accts } = useContext(Web3Context);
  const [commitments, setCommitments] = useState([]);

  const justAsync = async () => {
    if (ins.methods) {
      const totalCommitments = await ins.methods.totalCommitments().call();
      const promise = [];
      if (totalCommitments !== 0) {
        for (let i = 0; i < totalCommitments; i++) {
          promise.push(ins.methods.commitments(i).call());
        }
        Promise.all(promise)
          .then((values) => {
            setCommitments(values);
          })
          .catch((err) => console.log(err));
      } else {
        setCommitments([]);
      }
    }
  };
  useEffect(() => {
    justAsync();
  }, [ins, accts, web3]);

  return (
    <>
      {commitments.map((commitment, i) => {
        if (accts.includes(commitment.contractee)) {
          return (
            <Commitment
              key={i}
              assignedContracteeEvent={ins.events.AssignedContractee}
              accts={accts[0]}
              assignContractee={ins.methods.assigncontractee}
              id={i}
              web3={web3}
              contract={commitment.Contract}
              contractor={commitment.contractor}
              contractee={commitment.contractee}
              amount={commitment.amount}
            />
          );
        }
      })}
    </>
  );
}

export default PendingContract;
