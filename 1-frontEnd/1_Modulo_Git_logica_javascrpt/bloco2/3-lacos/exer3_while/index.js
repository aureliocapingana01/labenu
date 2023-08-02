let numero;
let soma = 0 


while (numero !== 0) {
    let input = require('readline-sync')
    numero = Number(input.question('Digite um numero: '))
    soma += numero
}

console.log(`\n A soma dos numeros digitados é: ${soma}`)