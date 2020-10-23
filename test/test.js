const DeleteCommitment = artifacts.require("./DeleteCommitment.sol");
    const address=["0x4e6C6E1148299CA86A65b2b63c2ebd95D3ed668F","0x5c7400642Fc3E63AB8963bCd945dE4118D15F827","0xE93ee79e4604951a47F1Dbb6e1c2Fe5762d8Fe03"]
const test = async ()=>{    
    const ins = await DeleteCommitment.deployed();
    await ins.postCommitment("Make me a Dapp",10000,{from:address[0],value:1000});
    console.log("1");
    await ins.assignContractee(0,{from:address[2]});
    console.log("2");
    await ins.commitments(0)

    
}
test();