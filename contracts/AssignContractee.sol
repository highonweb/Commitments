pragma solidity >=0.4.21 <0.7.0;

import "./Commitments.sol";

contract AssignContractee is Commitments {
    event AssignedContractee(address contractee, uint256 _id);

    function assigncontractee(uint256 _id) external {
        commitments[_id].contractee = msg.sender;
        commitments[_id].status = true;
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
    }
}
