pragma solidity >=0.4.21 <0.7.0;

import "./Commitments.sol";

contract DeleteCommitment is Commitments {
    event EmergencyEvent();

    function deleteCommitment(uint256 _id) internal {
        delete commitments[_id];
        commitments[_id] = commitments[totalCommitments - 1];
        delete commitments[totalCommitments - 1];
        emit EmergencyEvent();
    }

    function deleteByContractor(uint256 _id) public {
        require(
            commitments[_id].contractor == msg.sender && commitments[_id].status
        );
        deleteCommitment(_id);
    }
}
