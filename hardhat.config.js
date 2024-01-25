require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const INFURA_API_KEY = "65941d6610c34a228a827fad4612479f";
const SEPOLIA_PRIVATE_KEY =
  "6c7c888e6057588f26db5c6e10b8c036b6a575bd959520c632be1bd485afe898";

module.exports = {
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./src/contracts",
    artifacts: "./src/abis",
  },
  mocha: {
    timeout: 40000,
  },
};
