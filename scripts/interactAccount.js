const { ethers } = require("hardhat");
require("dotenv").config();
const artifact = require("../artifacts/contracts/ERC6551Account.sol/ERC6551Account.json");

async function main() {
    const provider = new ethers.AlchemyProvider(
        "bsctest",
        process.env.BSC_TEST_API_KEY
    );
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    //insert your TBA address here from scripts/createAccount.js
    const tokenBoundAccount = process.env.TBA_ADDRESS;
    const tba = new ethers.Contract(tokenBoundAccount, artifact.abi, signer);

    //Localhost implementation (hardhat node)
    // const [signer, account] = await ethers.getSigners();

    const newName = ethers.encodeBytes32String("TEST ACCOUNT NAME");
    console.log(
        "Setting Account Name to: ",
        ethers.decodeBytes32String(newName)
    );
    console.log(
        "Account name in hex: ",
        ethers.encodeBytes32String("TEST ACCOUNT NAME")
    );
    exit;
    const tx = await tba.setAccountName(newName);
    await tx.wait();
    const accountName = await tba.getAccountName();
    console.log("New Account Name: ", ethers.decodeBytes32String(accountName));
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
