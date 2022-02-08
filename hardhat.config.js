require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
// require("hardhat-watcher");

const { API_URL, PRIVATE_KEY,BSC_apiKey } = process.env;

module.exports = {
  defaultNetwork: "bsc",
  networks: {
    hardhat: {},
    bsc:{
     url: API_URL,
     accounts: [PRIVATE_KEY]
    },
  
  },
  watcher: {
    compilation: {
      tasks: ["compile"],
      files: ["./contracts"],
      verbose: true,
    },
    ci: {
      tasks: ["clean", {command: "compile", params: {quiet: true}}, {
        command: "test",
        params: {noCompile: true, testFiles: ["testfile.ts"]}
      }],
    }
  },
  etherscan: {
    apiKey: BSC_apiKey    //Etherscane
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",

settings: {
  optimizer: {
    enabled: true,
    runs: 200,
  },
},
      },
      {
        
version: "0.6.12",
settings: {
  optimizer: {
    enabled: true,
    runs: 200,
  },
},
      },
      {
        version: "0.4.22",

settings: {
  optimizer: {
    enabled: true,
    runs: 200,
  },
},
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}