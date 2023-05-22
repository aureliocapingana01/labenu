let listaDeTarefas = []
let usuario1 = prompt('Didigite primeira tarefa: ')
let usuario2 = prompt('Didigite primeira tarefa: ')
let usuario3 = prompt('Didigite primeira tarefa: ')

listaDeTarefas.push(usuario1)
listaDeTarefas.push(usuario2)
listaDeTarefas.push(usuario3)

console.log(listaDeTarefas)

let usuario = prompt('Digite o indice de uma tarefa realizada: ')

listaDeTarefas.splice(0, usuario)
console.log(listaDeTarefas)