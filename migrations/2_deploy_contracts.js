/**
 * @title Deploy DeFi Staking Contracts
 * @dev Migration script to deploy Tether, RewardToken, and DecentralBank contracts
 * @notice This script handles the deployment of the entire DeFi staking platform
 *
 * Deployment Process:
 * 1. Deploy Tether (USDT) contract with initial supply
 * 2. Deploy RewardToken (RWD) contract
 * 3. Deploy DecentralBank contract with RWD and USDT addresses
 * 4. Transfer initial RWD tokens to DecentralBank for rewards
 * 5. Transfer initial USDT tokens to test account
 *
 * @param {Object} deployer - Truffle deployer object
 * @param {string} network - Network name (e.g., 'development', 'ropsten')
 * @param {string[]} accounts - Array of available accounts from web3 provider
 *
 * Important Notes:
 * - Deployment order is crucial due to contract dependencies
 * - Initial transfer amounts are set to 100 tokens (with 18 decimals)
 * - Make sure there's enough ETH in deployer account for gas
 *
 * @return {Promise<void>} A promise that resolves when all contracts are deployed
 */

// Import Tether contract artifacts for deployment
const Tether = artifacts.require("Tether");
const RewardToken = artifacts.require("RewardToken");
const DecentralBank = artifacts.require("DecentralBank");

// Deploy the Tether, RewardToken, and DecentralBank contracts to the network specified in truffle-config.js (development by default)
// Note: The deployment order is important due to dependencies between contracts
module.exports = async function (deployer, network, accounts) {
  // accounts: Array of addresses provided by the Ethereum client
  // Deploy the Tether contract with an initial supply of 1,000,000 Tether tokens
  await deployer.deploy(Tether);
  // Get the deployed Tether contract 
  const tether = await Tether.deployed();
  // Deploy the RewardToken contract
  await deployer.deploy(RewardToken);
  // Get the deployed RewardToken contract- 100 * 10^18 = 100000000000000000000 RWD tokens
  const rwd = await RewardToken.deployed();
  // Deploy the Decentral Bank contract
  // Deploy the Decentral Bank contract with the addresses of the RewardToken and Tether contracts
  // rwd.address: Address of the deployed RewardToken contract
  // tether.address: Address of the deployed Tether contract
  await deployer.deploy(DecentralBank, rwd.address, tether.address);
  // Get the deployed Decentral Bank contract
  const dbank = await DecentralBank.deployed();

  // Transfer 100 RWD tokens to Decentral Bank for rewards (18 decimals) - 100 * 10^18 = 100000000000000000000 RWD tokens

  await rwd.transfer(dbank.address, "100000000000000000000");

  // transfer 100 Tether tokens to accounts[1]
  await tether.transfer(accounts[1], "100000000000000000000");
};
