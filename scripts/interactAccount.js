require("dotenv").config();
const { ethers } = require("hardhat");
const Web3 = require("web3");
const web3 = new Web3(
    new Web3.providers.HttpProvider(process.env.BSC_TEST_URL)
);
const artifact = require("../artifacts/contracts/ERC6551Account.sol/ERC6551Account.json");
const abiERC6551Account = artifact.abi;

async function main() {
    const tokenBoundAccount = process.env.TBA_ADDRESS;
    const tba = new web3.eth.Contract(abiERC6551Account, tokenBoundAccount);

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
    const tx = {
        from: process.env.WALLET_ADDRESS,
        to: process.env.TBA_ADDRESS,
        data: tba.methods.setAccountName(newName).encodeABI(),
        gas: await tba.methods.setAccountName(newName).estimateGas({
            from: process.env.WALLET_ADDRESS,
        }),
    };
    const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        process.env.PRIVATE_KEY
    );
    const receipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    console.log(`Transaction hash: ${receipt.transactionHash}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
