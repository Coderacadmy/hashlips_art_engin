const { ethers } = require('hardhat')
const hre = require("hardhat");

async function main() {
    const NFT = await hre.ethers.getContractFactory("SimpleNftErc1155_flat");
    const nft = await SimpleNftErc1155_flat.deploy();
    await nft.deployed();
    console.log("HoldexLaunchPad deployed to:", nft.address);
    
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

     