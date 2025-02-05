const Tether = artifacts.require("Tether");
const RewardToken = artifacts.require("RewardToken");
const DecentralBank = artifacts.require("DecentralBank");

require("chai").use(require("chai-as-promised")).should();

// Test the DecentralBank contract
// The contract is deployed with the following parameters: RewardToken address and Tether address
// The contract is deployed by the owner
// The owner is the first account in the accounts array
// The customer is the second account in the accounts array
contract("DecentralBank", ([owner, customer]) => {
  let tether, rwd, dbank;
  // Helper function to convert tokens to wei (1 token = 10^18 wei)
  const tokens = (number) => web3.utils.toWei(number, "ether");

  // Before each test, deploy the contract with the following parameters and assign the contract to the variables
  before(async () => {
    tether = await Tether.new();
    rwd = await RewardToken.new();
    dbank = await DecentralBank.new(rwd.address, tether.address);

    // Transfer all tokens to Decentral Bank (1 million)
    await rwd.transfer(dbank.address, tokens("1000000"));

    //transfer 100 mock Tether tokens to customer

    await tether.transfer(customer, tokens("100"), { from: owner });
  });

  describe("Mock Tether Deployment", async () => {
    it("matches the name succefully", async () => {
      const name = await tether.name();
      assert.equal(name, "Test Tether Token");
    });
  });
  describe("Reward Token Deployment", async () => {
    it("matches the Reward Token name succefully", async () => {
      const name = await rwd.name();
      assert.equal(name, "Icey Token");
    });
  });
  describe("Decentral Bank Deployment", async () => {
    it("matches the Decentral Bank name succefully", async () => {
      const name = await dbank.name();
      assert.equal(name, "Decentral Bank");
    });
  });
});
