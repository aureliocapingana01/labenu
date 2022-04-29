// Interpretação de código


/* 
1- Exercicio 

O código usa a estrutura for para analisar a variavel i onde sendo menor que 5 vai fazendo o loop adquirindo mais 1 valor, e jogar o seu numero na variavel valor, que no final vai somar com o mesmo e imprimirá no console o valor 10

*/
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)


/* 2 - Exercicio 
   a - No console será impreeso todos os numeros do array maiores que 18,
   
   b- Para acessar o index de cada elemento do array com o fot...of não é suficiente, uma vez que ele é focado mas no elemento em si, não em sua posicao ou index 
*/



/*
3- Exercicio
O usuario digitando o numero 4 ou qualquer outro numero, será impresso no console as linhas com os nmero de asteriscos
*/

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} */





//   Escrita de código

// 1 

/*let usuario = Number(prompt("Quantos bichinhos de estimação voce tem ?"))
const array = []
let usuario1 = ""

if ( usuario === 0){
    console.log("Que pena! Você pode adotar um pet!")
}
else {
    for (let pet = 0; pet < usuario; pet++ ){
        let usuario1 = prompt("Digite o nome")
        array[array.unshift()] = usuario1 
    }
    console.log(array)
    console.log(`você tem ${usuario} bichinhos, com nomes de ${array }`)
}
*/



/////////////////  2 Exercicio

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


////////// a
/*
for (const imprimir of arrayOriginal ) {
  if( imprimir%1 == 0){
    console.log(imprimir)
  }
}

*/

///////////// B

/*
const divisor = ""
const arrayDividido = []
const arrayOriNovo = []

for (let i =0; i < arrayOriginal.length; i++ ){
  let numero = arrayOriginal[i]
  let divisor = numero / 10
  arrayDividido.push(divisor)
  arrayOriNovo.push(arrayOriginal[i])
}
console.log("O array Original Dividido por 10 fica assim: \n" ,arrayDividido)

console.log("O array Original no seu indice é assim: \n" , arrayOriNovo)

*/


//////////////// C

/*const arrayNovo = []
const pares = ""
*/




/////////////////////// D
 
function arrNovo (arr){
  const novoArr = []
  for( let i =0; i<arrayOriginal.length; i++){
    novoArr.push(`O elemento do índex ${i} é: ${arr[i]}`)
  }
  return novoArr
}
const mensagem = arrNovo(arrayOriginal)
console.log(mensagem)










/*
///////////////////// E

let maior = arrayOriginal[0]
let menor = arrayOriginal[0]

for (let i=0; i<arrayOriginal.length; i++){
  let numero = arrayOriginal[i]

  if(maior < numero){
    maior = numero
    // console.log(maior)
  }
  else if(numero < menor){
    menor = numero
    // console.log(menor)
  }

  console.log(`O maior número é ${maior} \n  menor número é ${menor}`)
}

*/






// let maiorNum = 0;
// let menorNum = 0;
// function mostrarMaiorMenor(array) {
//   for (let num = 0; num < array.length; num++) {
//     if (array[num] > maiorNum) {
//       maiorNum = array[num];
//     } else {
//       menorNum = array[num];
//     }
//   }
//   console.log(maiorNum, menorNum);
// }

// const resultado = mostrarMaiorMenor(arrayOriginal);
// console.log(resultado);




























// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = arrayOriginal[0]
// let menor = arrayOriginal[0]
// for(let i = 0; i < arrayOriginal.length; i++) {
//     let elemento = arrayOriginal[i]

//     if(elemento > maior) {
//         maior = elemento
//     }   else if(elemento <= menor) {
//         menor = elemento
//     }
// }
// console.log(`O maior número é ${maior} e o menor número é ${menor}`)

/////___________EXERCÍCIO 3-B____________/////

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = Number(arrayOriginal[0])
// let divisao
// let arrayNovo = []
// for(let i = 0; i < arrayOriginal.length; i++) {
//     let elemento = arrayOriginal[i]
//     divisao = elemento / 10
//     // console.log(divisao)
//     arrayNovo.push(divisao)
// }
// console.log(arrayNovo)

/////___________EXERCÍCIO 3-C____________/////

// const arrayDePalavras = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let mensagem = ""

// for(let numero of arrayDePalavras) {

//     if(numero%10 === 0){
//         console.log(numero)
//     }
// }

/////___________EXERCÍCIO 3-D____________/////

// const arrayDePalavras = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let numero = arrayDePalavras[0]

// for (let i = 0; i < arrayDePalavras.length; i++) {
//     let array2 = arrayDePalavras.slice(0)
    
//     console.log(`O elemento ${i} do índex é: ${array2}`)
// }

