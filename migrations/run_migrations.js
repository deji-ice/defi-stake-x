const Migrations = artifacts.require("./Migrations.sol");

module.exports = async function (deployer) {
  // Deploy the Migrations contract
  await deployer.deploy(Migrations);
};
