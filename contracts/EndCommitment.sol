pragma solidity >=0.4.21 <0.7.0;

import "./Commitments.sol";
import "./AddCommitment.sol";
import "./DeleteCommitment.sol";

contract EndCommitment is Commitments, AddCommitment, DeleteCommitment {
    event EndCommitmentContracteeEvent(
        address _contractor,
        address _contractee,
        string Contract
    );

    event transferAmountEvent(
        address _contractor,
        address _contractee,
        uint256 _amount
    );

    function EndCommitmentContractor(uint256 _id) external {
        //commitment closed by contractor
        require(
            commitments[_id].contractor == msg.sender &&
                commitments[_id].status &&
                commitments[_id].contracteeStatus
        );
        commitments[_id].contractorStatus = true;
        // transfering amount to contractee
        bool transferStatus = transferAmount(
            commitments[_id].amount,
            commitments[_id].contractee
        );
        require(transferStatus);
        emit transferAmountEvent(
            commitments[_id].contractor,
            commitments[_id].contractee,
            commitments[_id].amount
        );
        deleteCommitment(_id);
    }

    function EndCommitmentContractee(uint256 _id) external {
        //commitment completed by contractee
        require(
            commitments[_id].contractee == msg.sender && commitments[_id].status
        );
        commitments[_id].contracteeStatus = true;

        emit EndCommitmentContracteeEvent(
            commitments[_id].contractor,
            commitments[_id].contractee,
            commitments[_id].Contract
        );
    }
}
