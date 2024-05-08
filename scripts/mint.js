require("hardhat");
require("dotenv").config();

async function main() {
    // Get the contract instance
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.attach(process.env.NFT_ADDRESS);
    tokenId = await nft.nextId();
    //Address you want to mint your NFT to
    const to = process.env.WALLET_ADDRESS;
    // Mint token
    console.log(`Minting token ${tokenId} to ${to}...`);
    const tx = await nft.safeMint(to);
    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    // Log the transaction details
    console.log("Transaction hash:", receipt.hash);
    console.log(`Link: ${process.env.BSC_TEST_EXPLORER}/tx/${receipt.transactionHash}`);
    console.log("Gas used:", receipt.cumulativeGasUsed);

    // Check if the transaction was successful (status 1)
    if (receipt.status === 1) {
        console.log(
            `Transaction was successful. Token ${tokenId} minted to ${to}`
        );
    } else {
        console.log("Transaction failed.");
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
