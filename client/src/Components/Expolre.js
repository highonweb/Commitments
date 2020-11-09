import React, { useState, useEffect, useContext } from "react";
import Commitment from "./Commitment";
import "../css/explore.css";
import { Web3Context } from "../contexts/Web3Context";

function Explore() {
  const { web3, accts, ins } = useContext(Web3Context);
  const [commitments, setCommitments] = useState([]);

  const allCommitments = async () => {
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
    allCommitments();
  }, [ins, accts, web3]);

  return (
    <>
      {commitments === [] ? (
        <h1 className="heading">Oops no commitments!</h1>
      ) : (
        <h1 className="heading">Commitments</h1>
      )}
      {commitments.map((commitment, i) => (
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
      ))}
    </>
  );
}
export default Explore;
