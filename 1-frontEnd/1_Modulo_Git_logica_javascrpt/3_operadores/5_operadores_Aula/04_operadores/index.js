/* 
   AULA DE OPERADORES
      Turma Hopper
*/

// operadores aritmeticos
const primeiroValor = 13
const segundoValor = 2

//soma
const resultado = primeiroValor % segundoValor
// console.log(resultado)

// incremento
let idade = 27

idade = idade + 1
console.log(idade)

idade += 2
console.log(idade)


/* EXERCICIO 01 */
// Somar 3 com 4
const soma = 3 + 4
// console.log(soma)

// Multiplicar 3 com 5 e dividir o resultado por 2
const multi = 3 * 5 / 2
// console.log(multi)

// Subtrair 5 de 4 e multiplicar o resultado por -1
const subtrair = (5 - 4) * -1
// console.log(subtrair)

// Determinar o resto da divisão de 234 por 5
const divisao = 234 / 5
// console.log(divisao)
const resto = 234 % 5
// console.log(resto)

const condicaoIgual = 2 == "2" // equal
const condicaoStrict = 2 === "2" // strict equal



/* EXERCICIO 02 */
const numero1 = 3
const numero2 = 5

//O primeiro número é igual ao segundo? True/False
console.log ( numero1 === numero2)
// O primeiro número é diferente do segundo? True/False
console.log ( numero1 !== numero2)

// O primeiro número é maior que o segundo? True/False
console.log ( numero1 > numero2)

// O primeiro número é menor que o segundo? True/False
console.log ( numero1 < numero2)



// operadores logicos

/* EXERCICIO 03 e 04 */
const a = true, b = false, c = false

// Realize a operação: a && b
console.log(a && b)
// Realize a operação: b && c
console.log( b && c)
// Realize a operação: a && c
console.log( a && c)
// Realize a operação: a && b && c
console.log( a && b && c )

// Realize a operação: a || b
console.log(a || b)
// Realize a operação: b || c
console.log( b || c)
// Realize a operação: a || c
console.log( a || c)
// Realize a operação: a || b || c
console.log( a || b || c )

console.log(  ! false)

/* EXERCICIO 05 */

/*Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre:	
O nome da pessoa
A idade dessa pessoa
Um true ou false que diz se ela é maior de idade
Quantos anos ela  terá em 2050 */
const nome = "Tayanne"
const anoNascimento = 1995
const anoAtual = 2022
const idade2 = anoAtual - anoNascimento

console.log("Nome:", nome)
console.log("idade:", idade2)
console.log(idade2 >= 18)
console.log(2050 - anoNascimento)






