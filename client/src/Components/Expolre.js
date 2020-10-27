import React, {useState,useEffect} from 'react';
import Commitment from './Commitment';

function Explore({ins,accts}) {
  const[commitments,setCommitments] = useState([]);

  const allCommitments = async() => {
    if (ins.methods) {
      const totalCommitments = await ins.methods.totalCommitments().call();
      const promise = [];
      for (let i = 0; i < totalCommitments; i++) {
        promise.push(ins.methods.commitments(i).call());
      }
       Promise.all(promise).then((values)=>{setCommitments(values);}).catch((err)=>console.log(err));
    }
  };

  useEffect(()=>{
    allCommitments();
  },[ins,accts]);

return (
  <>
    <h1>Commitments</h1>
    {commitments.map((commitment,i) => (
      <Commitment key = {i} contract = {commitment.Contract} contractor = {commitment.contractor} contractee = {commitment.contractee} amount = {commitment.amount}/>
    ))}

  </>
);
}
export default Explore;
