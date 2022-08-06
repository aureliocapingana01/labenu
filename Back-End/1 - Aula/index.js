// console.log("Hello World")

import { pessoas } from "./pessoas.js";

const nomeBusca = process.argv[2]

// const resultado = pessoas.find((nome) => nome === nomeBusca)

const resultado = pessoas.filter((nome) => nome.toLowerCase().includes(nomeBusca.toLowerCase()))

console.table(resultado)


























// const nome = process.argv["3"]
// console.log(`para os programadores, ${nome}`)