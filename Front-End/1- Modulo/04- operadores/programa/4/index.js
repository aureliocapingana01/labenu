
const primeiroNumero = prompt("Digite um número")
const segundoNumero = prompt("Digite outro número")

let maior = parseInt(primeiroNumero) > parseInt(segundoNumero)
let menor = parseInt(primeiroNumero) < parseInt(segundoNumero)

let primeiroDivisivel = parseInt(primeiroNumero) % parseInt(segundoNumero)
let primeiro = primeiroDivisivel == 0 

let segundoDivisivel = parseInt(segundoNumero) % parseInt(primeiroNumero)
let segundo = primeiroDivisivel != 0

console.log(maior)
console.log(menor)
console.log(primeiro)
console.log(segundo)

