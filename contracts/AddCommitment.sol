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

    function postCommitment(string memory _Contract, uint256 _amount)
        public
        payable
        chkAmt(_amount, msg.value)
    {
        commitments.push(
            Commitment({
                contractor: msg.sender,
                contractee: address(0),
                Contract: _Contract,
                amount: _amount,
                status: false
            })
        );
        emit NewCommitment(msg.sender, _Contract, _amount, false);
        totalCommitments++;
    }
}
