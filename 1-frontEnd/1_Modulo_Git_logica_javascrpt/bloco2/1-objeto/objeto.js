/*
1. Resolva os passos a seguir: 
   a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array 
      que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe 
      como entrada um objeto e imprime uma mensagem no modelo abaixo
*/
const person = {
    nome: 'Aurélio',
    apelido: [
        'Manguena',
        'GauGau',
        'Ti-Beg'
    ]
}

const mySelf = (person) => {
    let im = `Eu sou ${person.nome}, mas pode me chamar de: ${person.apelido[0]}, ${person.apelido[1]} ou ${person.apelido[2]}` 
    return im
}

console.log(im = mySelf(person))

/*
b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
 */

const newPerson = {
    ...person,
    apelido: [
        'Angolano',
        'Brasileiro',
        'Lutando'
    ]
}


console.log(im = mySelf(newPerson))