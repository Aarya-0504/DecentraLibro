async function main() {
    const { ethers } = require("hardhat");
    const contractFactory = await ethers.getContractFactory("DecentraLibro");
    const contract = await contractFactory.deploy();
    console.log("Contract deployed to:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  