import { pessoas } from "./pessoas.js";

const nomeBusca = process.argv[2]
// const resultado = pessoas.find((nome) => nome === nomeBusca)
const resultado = pessoas.filter((nome) => nome.toLocaleUpperCase().includes(nomeBusca.toLocaleUpperCase()))
console.table(resultado)






// console.log("Hello World")

// const nome = process.argv["2"]
// console.log(`olá, ${nome}`)