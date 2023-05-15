/*
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
*/



// 2 exercicio
/*
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
*/


// *********************3exercicio
/*
let horaTrabalho = prompt("Quantas horas você trabalha por dia?")
let valorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorDia/horaTrabalho} por hora`)
*/



//******************* 4 exercicio 
/*
let nome = prompt('Digite seu nome: ')
let idade = Number(prompt('Digite a sua idade: '))
console.log(`Olá ${nome} sua idade é ${idade} anos de idade`)
*/


//**************** 5 exercicio 

let roupa = Number(prompt('Voce usa a roupa azual hoje: \n 0-SIM \n 1-NÂo'))
let trabalho = Number(prompt('Você trabalha: \n 0-SIM \n 1-NÂo'))
let maisSalMin = Number(prompt('Você ganha mais que um salario minimo: \n 0-SIM \n 1-NÂO'))

if(roupa == 0 && trabalho == 0 && maisSalMin == 0) {
    console.log(`Parabens, a sua roupa é azul ${roupa} \n voce trabalha ${trabalho} e ganha 
     mais que 1 salario minimo ${maisSalMin}`)
}
else {
    console.log('Vocev nao pode ser cadastrado')
}

// console.log(`Parabens, a sua roupa é azul ${roupa} \n voce trabalha ${trabalho} e ganha mais que 1 salario minimo ${maisSalMin}`)