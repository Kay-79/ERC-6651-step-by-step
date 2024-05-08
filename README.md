# Custom ERC-6551 Tutorial

This project is a custom implementation of the ERC-6551 token-bound account standard with an ERC-721 NFT (Non-Fungible Token).

## Getting Started

To set up and run this project on your local environment, follow these steps:

### Installation

Use npm to install the project's dependencies:

```bash
npm install
```

Choose Solidity compiler version 0.8.20

```bash
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
-   ERC6551Account: https://testnet.bscscan.com/address/0x233a7A15733b2331f2bE5a0FB97b7ED329941CAA
-   ERC6551Registry: https://testnet.bscscan.com/address/0xE643f90393749F4dBa4eCf2BD0BC17047AC1d513

### Step 2: Mint Token and Create Token Bound Account

```bash
npx hardhat run --network bsctest scripts/mint.js
```

#### Result:

-   Minted Token: https://testnet.bscscan.com/tx/0x2840cabbc2696317e7391b1c1cf1c6e64b19deb20eba07c81db76662305ae2ed

### Step 3: Create Token Bound Account - TBA (ERC-6551)

```bash
npx hardhat run --network bsctest scripts/createAccount.js
```

#### Result:

-   TBA: https://testnet.bscscan.com/address/0x9a320167d6B60E6Ce739C79a6B36246b2233558f

### Step 4: Interact with Token Bound Account

```bash
npx hardhat run --network bsctest scripts/interactAccount.js
```

#### Result:

-   Transaction hash: https://testnet.bscscan.com/tx/0x8e8c4feabaaccd3d5bccd27702c726388620673a2e6d66ee3b4301057ad905f8
