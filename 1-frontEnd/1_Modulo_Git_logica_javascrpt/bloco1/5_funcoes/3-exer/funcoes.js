/*
Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
     */

let num1 = Number(prompt('Digite o primeiro numero: '))
let num2 = Number(prompt('Digite o segundo numero: '))

//********************* Soma *******************/

const somar = function(num1, num2) {
    let soma = num1 + num2
    return soma
}

console.log('A Soma é:', soma = somar(num1, num2))


//********************* Subtração *******************/

const subtracao = function(num1, num2) {
    let sub = num1 - num2
    return sub
}

console.log('A Subtração é:', sub = subtracao(num1, num2))


//********************* Multipicação *******************/

const multipliacao = (num1, num2) => {
    let mult = num1 * num2
    return mult
}

console.log('A Multiplicação é:', mult = multipliacao(num1, num2))


//********************* Divisão *******************/

const divisao = (num1, num2) => {
    let div = num1 / num2
    return div
}

console.log('A Divisão é:', div = divisao(num1, num2))



//********************* Resto da Divisão *******************/

const resto = (num1, num2) => {
    let res = num1 % num2
    return res
}

console.log('O Resto da Divisão é:', res = resto(num1, num2))