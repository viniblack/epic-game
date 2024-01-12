async function main() {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy();
  console.log("Contrato implantado no endereço:", gameContract.target);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});