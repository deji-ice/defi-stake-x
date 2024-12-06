const Migrations = artifacts.require("./Migrations.sol");

export default async function (deployer) {
  // Deploy the Migrations contract
  await deployer.deploy(Migrations);
};
