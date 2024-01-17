const CONTRACT_ADDRESS = "0x9Ee29642f80A1BaDF4e5E0e57b70Afa67AE59B2F";

/*
 * Adicione esse método e tenha certeza de exportá-lo no final!
 */
const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };
