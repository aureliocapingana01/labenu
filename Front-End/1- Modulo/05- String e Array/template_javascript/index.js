let array
console.log('a. ', array)

//undefined

array = null
console.log('b. ', array)

//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

//11

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)



//3
const frase = prompt("Digite uma frase")

 console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// Subi num ônibus em marrocos
// SUBI NUM ÔNIBUS EM MARROCOS
// SUBI NUM ÔNIBUS EM MIRROCOS 27



// Exercícios de escrita de código

//1
const nome = prompt("Digite o seu nome")
const email = prompt("Digite o seu melhor e-mail")

console.log(`O e-mail ${email} foi cadastrdo com sucesso. Seja bem vindo(a) a Labernu ${nome}`)

//2
const comidasFavoritas = ["Arroz" , "Feijão", "Batata doce", "ovos", "Macarrão"]

console.log("Essas são as minhas comidas preferidas")
console.log(comidasFavoritas)

const usuario = prompt("Qual sua comida favorita")

comidasFavoritas.splice(1, 1 ,usuario)

console.log(comidasFavoritas)

// 3

const listaDeTarefas = []
const primeiraTarefa = prompt("Qual a sua primeira tarefa ")
const segundaTarefa = prompt("Digite a sua segunda tarefa")
const terceiraTafera =prompt("Digite a sua terceira tarefa")

listaDeTarefas.push(primeiraTarefa)
listaDeTarefas.push(segundaTarefa)
listaDeTarefas.push(terceiraTafera)

console.log(listaDeTarefas)

const usuarios = prompt("DIgite um indice entre [0,1 ou 2]")

listaDeTarefas.splice(usuarios)

console.log(listaDeTarefas)