require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "SEU_URL_DA_API_ALCHEMY",
      accounts: ["SUA_KEY_PRIVADA_DA_CONTA_SEPOLIA"],
    },
  },
};
