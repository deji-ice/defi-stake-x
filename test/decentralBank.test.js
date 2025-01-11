const Tether = artifacts.require("Tether");
const RewardToken = artifacts.require("RewardToken");
const DecentralBank = artifacts.require("DecentralBank");

require("chai").use(require("chai-as-promised")).should();

contract("DecentralBank", (accounts) => {
  let tether, rwd, dbank;
  before(async () => {
    tether = await Tether.new();
    rwd = await RewardToken.new();
    dbank = await DecentralBank.new(rwd.address, tether.address);
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
