require("hardhat");
require("dotenv").config();

async function main() {
    const Registry = await ethers.getContractFactory("ERC6551Registry");
    const registry = await Registry.attach(process.env.ERC6551REGISTRY_ADDRESS);
    //update salt for a more secure hash
    const salt = 0;
    const implementation = process.env.ERC6551ACOUNT_ADDRESS;
    const tokenAddress = process.env.NFT_ADDRESS;
    //replace with tokenId your minted in scripts/mint.js, logged on the CLI
    const tokenId = 0;
    const chainID = 97; //goerli
    const initData = "0x";

    // const tx = await registry.createAccount(
    //     implementation,
    //     chainID,
    //     tokenAddress,
    //     tokenId,
    //     salt,
    //     initData
    // );
    // const receipt = await tx.wait();
    // const address = await registry.account(
    //     implementation,
    //     chainID,
    //     tokenAddress,
    //     tokenId,
    //     salt
    // );
    run("verify:verify", {
        address: "0x9a320167d6B60E6Ce739C79a6B36246b2233558f",
        constructorArguments: [
            implementation,
            chainID,
            tokenAddress,
            tokenId,
            salt,
            initData,
        ],
    });
    // if (receipt.status == 1 && address) {
    //     console.log("Account created successfully at address: ", address);
    //     console.log("Verifying Account contract on BSC Testnet");
    //     run("verify:verify", {
    //         address: address,
    //         constructorArguments: [
    //             implementation,
    //             chainID,
    //             tokenAddress,
    //             tokenId,
    //             salt,
    //             initData,
    //         ],
    //     });
    // } else {
    //     console.log("Account creation failed");
    // }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
