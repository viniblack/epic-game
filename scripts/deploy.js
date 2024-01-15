async function main() {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Anitta", "Ronaldinho Gaúcho", "Zeca Pagodinho"],
    [
      "https://i.imgur.com/gC5qXsl.png",
      "https://i.imgur.com/0PvxtwP.png",
      "https://i.imgur.com/Pj8lHpM.png",
    ],
    [100, 200, 300],
    [100, 50, 25],
    "Capitão Nascimento",
    "https://i.imgur.com/yWpKMDt.png",
    10000,
    50
  );
  console.log("Contrato implantado no endereço:", gameContract.target);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Mintou NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Mintou NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Mintou NFT #3");

  console.log("Fim do deploy e mint!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
