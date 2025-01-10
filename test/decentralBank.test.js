

const Tether = artifacts.require("Tether");
// const RewardToken = artifacts.require("RewardToken");
// const DecentralBank = artifacts.require("DecentralBank");

require("chai")
    .use(require("chai-as-promised"))
    .should();

contract("DecentralBank", (accounts) => {
    describe("Mock Tether Deployment", async () => {
        it("matches the name succefully", async ()=>{
            let tether = await Tether.new();
            const name = await tether.name();
            assert.equal(name, "Test Tether Token");
        })
    })
});