require("hardhat");

async function main() {
    // console.log("Deploying contract ERC-721");
    // const NFT = await ethers.deployContract("NFT");
    // const nft = await NFT.waitForDeployment();
    // console.log("Verifying NFT contract on BSC Testnet");
    // run("verify:verify", {
    //     address: nft.target,
    //     constructorArguments: [],
    // });

    // console.log("Deploying contract ERC-6551 Account");
    // const Account = await ethers.deployContract("ERC6551Account");
    // const account = await Account.waitForDeployment();
    // console.log("Verifying Account contract on BSC Testnet");
    // run("verify:verify", {
    //     address: account.target,
    //     constructorArguments: [],
    // });

    console.log("Deploying contract ERC-6551 Registry");
    const Registry = await ethers.deployContract("ERC6551Registry");
    const registry = await Registry.waitForDeployment();
    console.log("Verifying Registry contract on BSC Testnet");
    run("verify:verify", {
        address: registry.target,
        constructorArguments: [],
    });

    console.log("NFT contract deployed at:", nft.target);
    // console.log("Account contract deployed at:", account.target);
    // console.log("Registry contract deployed at:", registry.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
