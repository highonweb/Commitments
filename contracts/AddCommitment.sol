pragma solidity >=0.4.21 <0.7.0;

import "./Commitments.sol";

contract AddCommitment is Commitments {
    event NewCommitment(
        address _contractor,
        string Contract,
        uint256 amount,
        bool status
    );

    function postCommitment(string calldata _Contract)
        external
        payable
    {
        commitments.push(
            Commitment({
                contractor: msg.sender,
                contractee: address(0),
                Contract: _Contract,
                amount: msg.value,
                status: false,
                contracteeStatus: false,
                contractorStatus: false
            })
        );
        emit NewCommitment(msg.sender, _Contract, msg.value, false);
        totalCommitments++;
    }

    function transferAmount(uint256 _amount, address _contractee)
        internal
        returns (bool)
    {
        address payable contracte = address(uint160(_contractee));
        contracte.transfer(_amount);
        return true;
    }
}
