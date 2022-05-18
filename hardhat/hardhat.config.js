require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};

// FakeNFTMarketplace deployed to:  0xD896ed8288376F6731B10a7118D4e059cAF19af8
// CryptoDevsDAO deployed to:  0x8EABB88d769CD3A72A8EE557697deBb7B3e68479