pragma solidity >= 0.4.21 <0.7.0;

contract Commitmentdapp {
    struct Commitment {
        address contractor;
        address contractee;
        string Contract;
        uint256 amount;
        bool status;   
    }

    Commitment[] public commitments;

    uint256 public totalCommitments = 0;

    event NewCommitment(address _contractor,string Contract,uint256 amount,bool status);

    modifier chkAmt(uint256 amount, uint256 value){
        require(amount == value);
        _;
    }

    function postCommitment(string memory _Contract,uint256 _amount) public payable chkAmt(_amount , msg.value){
        commitments.push(Commitment({contractor:msg.sender,contractee:address(0),Contract:_Contract,amount:_amount,status:false}));
        emit NewCommitment(msg.sender,_Contract,_amount,false);
        totalCommitments++;
    }
    // function getCommitments() view public returns (Commitment[] memory) {
    //     Commitment[] memory openCommitments;
    //     uint counter = 0;
    //     for (uint i = 0; i < totalCommitments; i++) {
    //         if (commitments[i].status == false) {
    //             openCommitments[counter] = commitments[i];
    //             counter++;
    //         }
    //     }
    //     return openCommitments;
    // }
    
}
