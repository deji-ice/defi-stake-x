module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Ganache GUI default port (if using Ganache CLI, use 8545)
      network_id: "*",       // Wildcard to match any network
    }
  },

  contracts_directory: './contracts/',  // Path to your smart contracts
  contracts_build_directory: "./truffle-abis",  // Where to store the compiled contracts
  compilers: {
    solc: {
      version: "0.5.1",      // Set the Solidity version you're using
    }
  
  },
};
