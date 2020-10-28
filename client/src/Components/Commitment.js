import React,{useState} from 'react'
import '../css/commitment.css';
function Commitment({contractor,contractee,amount,contract,id,web3,assignContractee,accts,assignedContracteeEvent}) {
    const[takenby,setTakenBy] = useState(contractee);
    const amountEther = web3.utils.fromWei(amount ,'ether');
    assignedContracteeEvent().on("data",(e)=>{setTakenBy(e.returnValues.contractee)});
    const takeContracts = async()=>{
        try {
           await assignContractee(id).send({from:accts});
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <div className = "commitment-container">
            <p>{contract}</p>
            <p>hosted by: {contractor}</p>
            <strong>amount: <b>{amountEther}</b> <strong>ETH</strong></strong>
            {"0x0000000000000000000000000000000000000000" !== takenby?<p>taken by: {takenby}</p>:<p><button onClick = {takeContracts}>take it!</button></p>}
            
          
        </div>
    )
}

export default Commitment
