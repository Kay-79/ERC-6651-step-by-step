# Custom ERC-6551 Tutorial

This project is a custom implementation of the ERC-6551 token-bound account standard with an ERC-721 NFT (Non-Fungible Token).

## Getting Started

To set up and run this project on your local environment, follow these steps:

### Installation

Use npm to install the project's dependencies:

```bash
npm install
npx hardhat compile
```

## Step by Step

-   Base on this tutorial: [ERC-6551 Tutorial](https://www.pinata.cloud/blog/how-to-deploy-a-custom-implementation-of-erc-6551)

### Step 1: Create a new ERC-721, ERC-6551Account and ERC6551Registry

```bash
npx hardhat run --network bsctest scripts/deploy.js
```

#### Result:

-   ERC721: https://testnet.bscscan.com/token/0xC33842Ec4d6981E305cd68b2562843C3308E3F24
-   ERC6551Account: https://testnet.bscscan.com/token/0x233a7A15733b2331f2bE5a0FB97b7ED329941CAA
-   ERC6551Registry: https://testnet.bscscan.com/token/0xE643f90393749F4dBa4eCf2BD0BC17047AC1d513

### Step 2: Mint Token and Create Token Bound Account

```bash
npx hardhat run --network bsctest scripts/mint.js
```

#### Result:

-   Minted Token: https://testnet.bscscan.com/tx/0x2840cabbc2696317e7391b1c1cf1c6e64b19deb20eba07c81db76662305ae2ed

### Step 3: Transfer Token to Token Bound Account
