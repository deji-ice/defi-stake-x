const Tether = artifacts.require("Tether");

module.exports = async function (deployer) {
  // Deploy the Tether contract
  await deployer.deploy(Tether); 
}