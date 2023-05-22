// Crie um objeto que represente uma pessoa. 
// Essa pessoa precisa ter nome, idade, gênero musical preferido.

// Imprima no console as propriedades desse objeto, seguindo o modelo abaixo:
// "O nome da pessoa é ___, ela tem ___ anos e gosta muito  de ___."


const pessoa = {
    nome: "Luan",
    idade: 23,
    generoMusical: "hip hop"
}

const frase = `O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito  de ${pessoa.generoMusical}.`
console.log(frase)