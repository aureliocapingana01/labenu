// A. Adicione ao objeto do exercício 1 uma lista com os nomes dos personagens do filme.
// B. Acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem 
// C. Altere a primeira pessoa do elenco por "Xuxa".
// D. Imprima no console as propriedades desse objeto, seguindo o modelo abaixo:
// "O nome do filme é ___. Seus personagens são ___, ___ e ___"

const filme = {
    nome: "Shrek",
    anoLancamento: 2001,
    direcao: ["Andrew Adamson","Vicky Jenson"],
    elenco: ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "John Lithgow" ],
    assistido: true 
}

//A 

filme.personagens = ["Shrek", "burro", "Fiona"]

//B
// console.log(filme.elenco[0], filme.personagens[0])
// console.log(filme.elenco[1], filme.personagens[1])
// console.log(filme.elenco[2], filme.personagens[2])
//C

filme.elenco[0] = "Xuxa"

//D
const frase = `O nome do filme é ${filme.nome}. 
Seus personagens são ${filme.personagens[0]}, ${filme.personagens[1]} e ${filme.personagens[2]}`

console.log(frase)