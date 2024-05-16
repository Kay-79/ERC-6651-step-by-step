require("hardhat");
require("dotenv").config();

async function main() {
    const Registry = await ethers.getContractFactory("ERC6551Registry");
    const registry = await Registry.attach(process.env.ERC6551REGISTRY_ADDRESS);
    //update salt for a more secure hash
    const salt = "0x0c915dc6c8019abc69d3d024f85b1eaf3ce0f5911c9ce9c97206b3120b0000c9";
    const implementation = process.env.ERC6551ACCOUNT_IMPLEMENT_ADDRESS;
    const tokenAddress = process.env.NFT_ADDRESS;
    //replace with tokenId your minted in scripts/mint.js, logged on the CLI
    const tokenId = 7;
    const chainID = 3939; //bsc testnet
    const initData = "0x";

    const tx = await registry.createAccount(
        implementation,
        salt,
        chainID,
        tokenAddress,
        tokenId
        // initData
    );
    const receipt = await tx.wait();
    const address = await registry.account(
        implementation,
        salt,
        chainID,
        tokenAddress,
        tokenId
        // initData
    );
    console.log("Account created successfully at address: ", address);
    if (receipt.status == 1 && address) {
        console.log("Account created successfully at address: ", address);
        console.log("Verifying Account contract on BSC Testnet");
        run("verify:verify", {
            address: address,
            constructorArguments: [
                implementation,
                salt,
                chainID,
                tokenAddress,
                tokenId,
                // initData
            ],
        });
    } else {
        console.log("Account creation failed");
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
