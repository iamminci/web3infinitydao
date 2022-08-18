const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const {
  RINKEBY_API_URL,
  MAINNET_API_URL,
  POLYGON_API_URL,
  PRIVATE_KEY,
  ETHERSCAN_API_KEY,
  POLYGONSCAN_API_KEY,
  CONTRACT_ADDRESS,
  ROYALTY_RECEIVER_ADDR,
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_API_URL ?? "",
      accounts: [`0x${PRIVATE_KEY}`],
      gasPrice: 10000000000, // 10 gwei
    },
    mainnet: {
      url: MAINNET_API_URL ?? "",
      accounts: [`0x${PRIVATE_KEY}`],
    },
    polygon: {
      url: POLYGON_API_URL ?? "",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      rinkeby: ETHERSCAN_API_KEY,
      mainnet: ETHERSCAN_API_KEY,
      polygon: POLYGONSCAN_API_KEY,
    },
  },
};
