import React, {useState,useEffect} from 'react';
import Commitment from './Commitment';
import '../css/explore.css';

function Explore({ins,accts}) {
  const[commitments,setCommitments] = useState([]);

  const allCommitments = async() => {
    if (ins.methods) {
      const totalCommitments = await ins.methods.totalCommitments().call();
      const promise = [];
      if (totalCommitments !== 0) {
        for (let i = 0; i < totalCommitments; i++) {
          promise.push(ins.methods.commitments(i).call());
        }
         Promise.all(promise).then((values)=>{setCommitments(values);}).catch((err)=>console.log(err));
      }else{
        setCommitments([]);
      }
      
    }
  };

  useEffect(()=>{
    allCommitments();
  },[ins,accts]);

return (
  <>
    {commitments == []?<h1 className = "heading">Oops no commitments!</h1>: <h1 className = "heading">Commitments</h1>}
    {commitments.map((commitment,i) => (
      <Commitment key = {i} contract = {commitment.Contract} contractor = {commitment.contractor} contractee = {commitment.contractee} amount = {commitment.amount}/>
    ))}
  </>
);
}
export default Explore;
