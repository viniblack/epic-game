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
    [100, 50, 25], // Dando de ataque
    "Capitão Nascimento",
    "https://i.imgur.com/yWpKMDt.png",
    10000, // Pontos de vida do boss
    50 // Dando de ataque do boss
  );
  console.log("Contrato implantado no endereço:", gameContract.target);

  let txn;
  // Só temos três personagens.
  // Uma NFT com personagem no index 2 da nossa array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // Pega o valor da URI da NFT
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
