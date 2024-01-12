// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

import "hardhat/console.sol";

contract MyEpicGame {
  constructor() {
    //nao pode usar acentos nos arquivos .sol, pois dah ruim!
    console.log("Esse eh o contrato do meu jogo, vamo bora!");
  }
}