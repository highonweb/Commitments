const Commitment = artifacts.require("Commitmentdapp");

module.exports = function (deployer) {
  deployer.deploy(Commitment);
};
