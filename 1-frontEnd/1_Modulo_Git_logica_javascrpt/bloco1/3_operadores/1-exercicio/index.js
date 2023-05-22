/*
1. Faça um programa que:
    a) Pergunte a idade do usuário
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
    */
   
const idadeUsuario = Number(prompt('Qual a sua idade: '))
const idadeAmigo = Number(prompt('Idade do seu amigo: '))
let idade = ''
let difer = ''

if(idadeUsuario > idadeAmigo) {
   difer = idadeUsuario - idadeAmigo
   idade = true 
}
else {
    difer = idadeAmigo - idadeUsuario
    idade = false
}

console.log(`Sua idade é maior do que a do seu melhor amigo? ${idade} \n A diferencia de idade é de ${difer} anos de idade`)