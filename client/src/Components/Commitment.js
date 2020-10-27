import React from 'react'
import '../css/commitment.css';
function Commitment({contractor,contractee,amount,contract}) {

    return (
        <div className = "commitment-container">
            <p>{contract}</p>
            <p>hosted by: {contractor}</p>
            <strong>amount: <b>{amount}</b></strong>
            <p>taken by: {contractee}</p>
        </div>
    )
}

export default Commitment
