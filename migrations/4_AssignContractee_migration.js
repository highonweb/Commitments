const AssignContractee = artifacts.require("AssignContractee");

module.exports = function (deployer) {
  deployer.deploy(AssignContractee);
};
