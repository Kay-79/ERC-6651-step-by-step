const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("NFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployNFT() {
    const [owner, otherAccount] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    const tokenId = 0
    const mintToAddress = process.env.WALLET_ADDRESS

    return { nft, owner, tokenId, mintToAddress };
  }

  describe("Minting", function () {
    it("Should fetch the next tokenId", async function () {
      const { nft, tokenId } = await loadFixture(deployNFT);
      expect(await nft.nextId()).to.equal(tokenId);
    });
    it("Should mint a token", async function () {
      const { nft, mintToAddress } = await loadFixture(deployNFT);
      const tx = await nft.mint(mintToAddress, "");
      const receipt = await tx.wait();    
      expect(receipt.status).to.equal(1);
    }
     );
  })

});
