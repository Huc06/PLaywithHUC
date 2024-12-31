import hre from 'hardhat';

async function main() {
  const contract = await hre.viem.deployContract("contracts/ProfileWithCmt.sol:GamerProfileWithComments");

  console.log(`GamerProfileWithComments deployed to: ${contract.address}`);
}

main().catch((error) => {
  console.error("Error deploying contract:", error);
  process.exitCode = 1;
});