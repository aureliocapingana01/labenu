/*
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    c) Por fim, imprima o array com os nomes dos bichinhos no console
 */
let input = require("readline-sync");
let qtAniamais = Number(input.question("Quantos animais voce tem: "));
// let qtAniamais = 2
let nomeDosAnimais = [];
let nome;

if (qtAniamais !== 0) {
  for (animais = 0; animais < qtAniamais; animais++) {
    nome = input.question("Digite os nomes: ");
    nomeDosAnimais += nome + " ";
  }
  console.table(nomeDosAnimais);
} else {
  console.log("Que pena, adote um por favor");
}

// for (i = 0; i < qtAniamais; i++) {
//     if(qtAniamais > 0) {
//         nome = prompt('Digite os nomes: ')
//         nomeDosAnimais = nome
//         console.log(nomeDosAnimais)
//     }
//     else {
//         console.log("Que pena! Você pode adotar um pet!")
//     }
// }
