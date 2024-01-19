async function main() {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Anitta", "Ronaldinho Gaúcho", "Zeca Pagodinho"],
    [
      "https://cloudflare-ipfs.com/ipfs/Qmf5H2u2SzA6vwqiVqR1sXYA7t2uVE3b8Sd9j9eDbpZ7no",
      "https://cloudflare-ipfs.com/ipfs/QmePWNHTawtw6sEDbr2XJv2P1rWyu4xnFwnToF4wHdFU8o",
      "https://cloudflare-ipfs.com/ipfs/QmNMQjNVhVwPtqVhccj7uuKnLJqNBKZBoi13AS4ZF1XKcH",
    ],
    [100, 200, 300], // Pontos de vida
    [100, 50, 25], // Dando de ataque
    "Capitão Nascimento",
    "https://cloudflare-ipfs.com/ipfs/QmTAmLezdUXmvZFhhhmbondkSCMb3asGGMK5KxKysVg4en",
    10000, // Pontos de vida do boss
    50 // Dando de ataque do boss
  );
  console.log("Contrato deployado no endereço:", gameContract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
