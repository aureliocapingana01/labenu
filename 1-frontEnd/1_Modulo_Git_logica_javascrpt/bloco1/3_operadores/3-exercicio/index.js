/*
3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    a) A idade do usuário em meses
    b) A idade do usuário em dias
    c) A idade do usuário em horas
*/

let idade = Number(prompt('Digite sua idade: '))
console.log('idade em meses:', idade * 12)
console.log('idade em dias:', idade * 365)
console.log('idade em horas:', idade * (365 * 60))
