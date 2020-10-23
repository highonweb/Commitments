pragma solidity >=0.4.21 <0.7.0;

import "./AddCommitment.sol";

contract AssignContractee is AddCommitment {
    event AssignedContractee(address contractee, uint256 _id);

    // check here!!!!!!!!!!!!!  uint256!!!
    function assigncontractee(uint256 _id) external {
        Commitment storage mycommitment = commitments[_id];
        require(mycommitment.contractor != msg.sender);
        mycommitment.contractee = msg.sender;
        mycommitment.status = true;
        emit AssignedContractee(msg.sender, _id);
    }

    function assignedContracts() external view returns (uint256[] memory) {
        uint256 counter = 0;
        uint256[] memory assignedCommitments;
        for (uint256 i = 0; i < totalCommitments; i++) {
            if (commitments[i].status == true) {
                assignedCommitments[counter] = i;
                counter++;
            }
        }
        return assignedCommitments;
    }
}
