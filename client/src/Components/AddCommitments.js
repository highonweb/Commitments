import React,{useState,useContext} from 'react';
import { Web3Context } from '../contexts/Web3Context';
import '../css/form.css';

function AddCommitments() {
    const{ web3, accts, ins} = useContext(Web3Context);
    const[contract,setContract] = useState("");
    const[amount,setAmount] = useState("0");
    const[posted,setPosted] = useState("");
    if (ins.events) {
        ins.events.NewCommitment().on("data",(e)=> setPosted('successfully posted!') );
    }
   
  
    const postcommitment = async (e) =>{
        e.preventDefault();
        await ins.methods.postCommitment(contract).send({from:accts,value: web3.utils.toWei(amount, "ether")});
        setContract("");
        setAmount("0");
    }
    return (
        <>
        <form onSubmit = {postcommitment}>
            <p className="post-heading"><strong>Create commitment</strong></p>
            <p>contract :</p>
            <input className="input" value= {contract} onChange = {(e)=>setContract(e.target.value)} type="text" required/>
            <p>amount(in ETH) :</p>
            <input className="input" value={amount} onChange= {(e)=>setAmount(e.target.value)} type="text" required />
            <input id="post-commitment" type="submit" value="post!"/>
        </form>
        <p className="text-align">{posted}</p>
       </>
    )
}

export default AddCommitments;
