/*
1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
 */


const idade = Number(prompt('Qual a sua idade: '))

if(idade >= 18) {
    console.log('Você pode dirigir')
}
else {
    console.log('Você não pode dirigir')
}