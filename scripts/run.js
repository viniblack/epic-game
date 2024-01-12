async function main() {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Anitta", "Ronaldinho Gaúcho", "Zeca Pagodinho"],
    [
      "https://i.imgur.com/gC5qXsl.png",
      "https://i.imgur.com/0PvxtwP.png",
      "https://i.imgur.com/Pj8lHpM.png",
    ],
    [100, 200, 300], // Pontos de vida
    [100, 50, 25] // Dando de ataque
  );
  console.log("Contrato implantado no endereço:", gameContract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});