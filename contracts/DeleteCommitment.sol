pragma solidity >=0.4.21 <0.7.0;

import "./EndCommitment.sol";

contract DeleteCommitment is EndCommitment {

    function deleteByContractor(uint256 _id) public {
        require(
            commitments[_id].contractor == msg.sender && commitments[_id].status
        );
        deleteCommitment(_id);
    }
}
