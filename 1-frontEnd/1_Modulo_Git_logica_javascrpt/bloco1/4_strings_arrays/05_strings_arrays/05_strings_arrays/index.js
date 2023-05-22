/* 
   AULA DE STRINGS E ARRAYS
      Turma Hopper
*/

/* STRINGS */

let nome = "Tayanne"

console.log("Meu nome é", nome)
console.log("Meu nome é " + nome)

console.log(`Meu nome é ${nome}`)

/* EXERCICIO 01 */

const nome2 = "Tayanne"
const cor = "Azul"

// CONCATENAÇAO
console.log("Meu nome é "+nome2+" e minha cor favorita é "+cor+"")

// TEMPLATE STRING
console.log(`Meu nome é ${nome2} e minha cor favorita é ${cor}`)


/* EXERCICIO 02 */
const phrase = "Tayanne LindaPraCaralho Novais"

const maisculas = phrase.toUpperCase()
console.log(maisculas)

const minusculas = phrase.toLowerCase()
console.log(minusculas)

const email = "       lala   lala   lala        "
console.log(email.trim())

const linda = phrase.includes("Linda")
console.log(linda)



/* ARRAYS */

const listaDeCompras = ["Larissa", "Natalia", "Pedro", "Tayanne"]

listaDeCompras[15] = "Paulo"

console.log(listaDeCompras) 


/* EXERCICIO 03 */
const dogs = ["Chowchow", "Pitbul", "Labrador", "Pincher", "Chiauauauau" ] 

// const usuario = prompt("Digite de 1 a 5:")
console.log(usuario)
console.log(dogs[usuario -1])



/* EXERCICIO 04 */
const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10]

console.log(numbers.length)

numbers.push(7)
numbers.splice(3, 2)

console.log(numbers)
console.log(numbers.length)


