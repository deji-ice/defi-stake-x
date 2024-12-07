const Migrations = artifacts.require("Migrations.sol");

module.exports = async function (deployer) {
  try {
    console.log("Starting deployment of Migrations contract...");
    await deployer.deploy(Migrations);
    console.log("Migrations contract deployed successfully.");
  } catch (error) {
    console.error("Error deploying Migrations contract:", error);
  }
};