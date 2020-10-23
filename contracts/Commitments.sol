pragma solidity >=0.4.21 <0.7.0;

contract Commitments {
    struct Commitment {
        address contractor;
        address contractee;
        string Contract;
        uint256 amount;
        bool status;
        bool contracteeStatus;
        bool contractorStatus;
    }

    Commitment[] public commitments;

    uint256 public totalCommitments;

    constructor() public {
        totalCommitments = 0;
    }
}
