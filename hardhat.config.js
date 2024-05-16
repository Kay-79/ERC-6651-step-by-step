require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
    solidity: "0.8.21",
    networks: {
        hardhat: {
            chainId: 3939,
        },
        bsctest: {
            url: `${process.env.BSC_TEST_URL}`,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
        dostest: {
            url: "https://test.doschain.com",
            accounts: [process.env.PRIVATE_KEY],
        },
        bsctest: {
            url: `${process.env.BSC_TEST_URL}`,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
        sepolia: {
            url: `${process.env.BSC_TEST_URL}`,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
    },
    etherscan: {
        apiKey: {
            bscTestnet: process.env.BSC_SCAN_API_KEY,
            sepolia: process.env.BSC_SCAN_API_KEY,
        },
    },
    defaultNetwork: "hardhat",
};
