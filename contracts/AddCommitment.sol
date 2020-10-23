pragma solidity >=0.4.21 <0.7.0;

import "./Commitments.sol";

contract AddCommitment is Commitments {
    event NewCommitment(
        address _contractor,
        string Contract,
        uint256 amount,
        bool status
    );

    modifier chkAmt(uint256 amount, uint256 value) {
        require(amount == value);
        _;
    }

    function postCommitment(string calldata _Contract, uint256 _amount)
        external
        payable
        chkAmt(_amount, msg.value)
    {
        commitments.push(
            Commitment({
                contractor: msg.sender,
                contractee: address(0),
                Contract: _Contract,
                amount: _amount,
                status: false,
                contracteeStatus: false,
                contractorStatus: false
            })
        );
        emit NewCommitment(msg.sender, _Contract, _amount, false);
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
