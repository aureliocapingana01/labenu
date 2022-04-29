/*
   LAÇOS DE REPETIÇÃO
      Turma Hooper
*/

/*
   WHILE
*/

// SINTAXE
let condicaoWhile = 0; // INICIO

while (condicaoWhile < 10) {
  // ENQUANTO  a condicao for verdadeira
  // esse bloco será executado
  //   console.log("While:", condicaoWhile); // AÇAO

  //incrementando a variavel de controle
  //para atingir a condição de parada
  condicaoWhile = condicaoWhile + 1; // NUNCA ESQUECER O INCREMENTO
}

//EXERCICIO 01
let numero;
let soma = 0;

while (numero !== 0) {
  numero = Number(prompt("Digite um numero"));
  soma += numero; // soma = soma + input
}
console.log("Soma:", soma);

/*
   REVISÃO FORMAS DE INCREMENTO
soma = soma + numero; => ISSO É IGUAL
soma += numero; => A ISSO
------------------------------------
soma = soma + 1; => ISSO É IGUAL
soma++; => A ISSO
 */

/*
   FOR
*/

// SINTAXE
for (let index = 0; index < 10; index++) {
  // INICIO, CONDIÇAO DE CONTINUIÇAO E INCREMENTO NA MESMA LINHA
  //   console.log("For:", controle);
}

// EXERCICIO 02
const array = [11, 15, 50, 18, 20, 14, 12, 13, 30, 40];

let maior = 0;
function maiorNumero(array) {
  for (let i = 0; i < array.length; i++) {
    // PERCORRE O ARRAY ATÉ O ULTIMO INDICE
    if (array[i] > maior) {
      // VERIFICA SE O ELEMENTO É MAIOR QUE O VALOR DA VARIAVEL AUXILIAR
      maior = array[i]; // SE FOR, SUBSTITUI PELO VALOR MAIOR
      console.log(`Elemento:${array[i]} || Indice: ${i}`); // O FOR NOS FORNECE O ELEMENTO E O INDICE DO ARRAY
    }
  }
  return maior;
}
const resultado = maiorNumero(array);
// console.log(`Maior no FOR: ${resultado}`);

/*
   FOR... OF
*/

// SINTAXE
let maior2 = 0;
for (let numero of array) {
  // PARA CADA ELEMENTO DO ARRAY
  // A CONDIÇAO DO FOR..OF ESTÁ DIRETAMENTE LIGADA AO TAMANHO DO ARRAY EM QUESTÃO
  if (numero > maior2) {
    maior2 = numero;
  }
}
// console.log("Maior no FOR..OF", maior2);

// EXERCICIO 03
const arrayPalavras = ["Hi", "I", "Am", "Groot"];

let mensagem = "";
function concatenarPalavras(array) {
  // COMPARANDO AS DUAS FORMAS DE CHEGAR NA MESMA SOLUÇAO
  for (const palavra of array) {
    mensagem += palavra + " ";
  }

  for (let i = 0; i < array.length; i++) {
    mensagem += array[i] + " ";
  }

  return mensagem;
}

const novaFrase = concatenarPalavras(arrayPalavras);
console.log(novaFrase);

// EXEMPLO DE CÓDIGO DE LUAN
const array1 = [30, 40, 100, 1000, 23, 9600, 66, 1900, 2000];

let index = 0;
let maior1 = 0;
while (index < array1.length + 1) {
  if (array1[index] > maior1) {
    maior1 = array1[index];
  }
  index++;
}
console.log(maior1);
