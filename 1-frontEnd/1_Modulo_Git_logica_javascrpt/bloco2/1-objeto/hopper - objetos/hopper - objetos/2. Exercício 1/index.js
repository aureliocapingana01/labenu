// Crie um objeto que represente um filme. 
// Ele deve ter dados da direção, o nome, o ano de lançamento,
// uma lista com o elenco e uma propriedade que diga se você já viu ou não.

//  Acesse e imprima no console cada uma das propriedades:
//  metade usando notação do ponto e a outra metade com notação de colchetes


// Dados do filme:
// Filme:  Shrek 
// o ano de lançamento: 2001
// direção: ["Andrew Adamson","Vicky Jenson"]
// elenco: ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "John Lithgow" ]
// assisti: true

const filme = {
    nome: "Shrek",
    anoLancamento: 2001,
    direcao: ["Andrew Adamson","Vicky Jenson"],
    elenco: ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "John Lithgow" ],
    assistido: true
}

console.log(filme.nome)
console.log(filme["anoLancamento"])
console.log(filme.direcao)
console.log(filme["elenco"])
console.log(filme.assistido)

