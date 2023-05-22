// Crie uma função que receba um objeto de pessoa (Exercício 2)
// e crie um novo objeto mantendo as propriedades originais e acrescentando:
// - Uma propriedade com a lista de suas comidas preferidas; 
// - Uma propriedade que seja um objeto, com nome e idade, para representar o melhor amigo da pessoa. 

// Ainda na função, imprima no console as propriedades desse objeto seguindo o modelo abaixo:
// "O nome da pessoa é ___ e suas comidas preferidas são ___, ___ e ___. 
// Seu melhor amigo se chama ___ e tem ___ anos"

const pessoa = {
    nome: "Luan",
    idade: 23,
    generoMusical: "hip hop"
}

const novaPessoa = {
    ...pessoa,
    comidasPreferidas: ["arroz", "feijão", "batata"],
    melhorAmigo: {
        nome: "JS",
        idade: 27
    }
}

// console.log("pessoa:", pessoa)
// console.log("nova Pessoa:", novaPessoa)

const frase = `O nome da pessoa é ${novaPessoa.nome} e  suas comidas preferidas são ${novaPessoa.comidasPreferidas[2]}, ${novaPessoa.comidasPreferidas[1]} e ${novaPessoa.comidasPreferidas[0]}. 
 Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos` 

console.log(frase)



