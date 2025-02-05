import Tether from "Tether";
import RewardToken from "RewardToken";
import DecentralBank from "DecentralBank";

// Deploy the Tether, RewardToken, and DecentralBank contracts to the network specified in truffle-config.js (development by default)
// Note: The deployment order is important due to dependencies between contracts
export default async function (deployer, accounts) {
  // accounts: Array of addresses provided by the Ethereum client
  // Deploy the Tether contract with an initial supply of 1,000,000 Tether tokens
  await deployer.deploy(Tether, "1000000000000000000000000");
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


  // Check the total supply of RewardToken
  const totalSupply = await rwd.totalSupply();
  // Transfer the total supply to Decentral Bank
  await rwd.transfer(dbank.address, totalSupply.toString());

  // transfer 100 Tether tokens to accounts[1]
  await tether.transfer(accounts[1], "100000000000000000000");

};
