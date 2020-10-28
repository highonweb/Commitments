import React from 'react';
import AddCommitments from './AddCommitments';
 
function Dashboard({ins,web3,accts}) {
  return (
    <>
    <h1 className="text-align">Your Dashboard</h1>
    <AddCommitments ins= {ins} accts = {accts[0]} web3={web3}/>
    </>
  );
}
 
export default Dashboard;