const Tether = artifacts.require("Tether");
const RewardToken = artifacts.require("RewardToken");
const DecentralBank = artifacts.require("DecentralBank");

// Deploy the Tether, RewardToken, and DecentralBank contracts to the network specified in truffle-config.js (development by default)
module.exports = async function (deployer, network, accounts) {
  // Deploy the Tether contract
  await deployer.deploy(Tether);
  // Get the deployed Tether contract
  const tether = await Tether.deployed();
  // Deploy the RewardToken contract
  await deployer.deploy(RewardToken);
  // Get the deployed RewardToken contract
  const rwd = await RewardToken.deployed();
  // Deploy the Decentral Bank contract
  await deployer.deploy(DecentralBank, rwd.address, tether.address);
  // Get the deployed Decentral Bank contract
  const dbank = await DecentralBank.deployed();
  // transfer all the RewardToken tokens to the Decentral Bank contract
  await rwd.transfer(dbank.address, "1000000000000000000000000");

  // transfer 100 Tether tokens to accounts[1]
  await tether.transfer(accounts[1], "100000000000000000000");

};
