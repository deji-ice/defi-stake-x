const Tether = artifacts.require("Tether");

export default async function (deployer) {
  // Deploy the Tether contract
  await deployer.deploy(Tether); 
}