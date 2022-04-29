// passagem por referência do endereço da memória

/* explicação - Quando passamos por referência, passamos o endereço de memória para uma função,
sendo assim passado a varíavel original, caso essa varíavel seja alterada dentro da função, seu valor
origina também será alterado. */

//               0       1       2       
const nomes = ["Luan", "Tay", "Camis"]
const novo = nomes // estou passando a referência do endereço de memória para varíael novo, caso
// qualquer alteração seja feita em alguma das duas varíavies nomes e novo será alterada em ambas.
// console.log(novo)

// passagem por valor
/*
    E o mas interessante: quando passamos uma variável para uma função 
    e alteramos essa variável dentro da função, a variável original lá de fora
    da função não era alterada.
*/

let nome = "Lucas" // é passado apenas uma cópia dessa variável para a minha função e não a variável original
function recebeNome(nome) {
    nome = "Luiza"
    return nome
}
const newName = recebeNome(nome)


// iniciando os estudos de array avançado.
// essa é minha array ou seja, minha variável especial, capaz de armazena vários dados
//                      0       1        2         3          posição positiva
//                     -4      -3       -2        -1          posição negativa
const nomePessoas = ["Luan", "Luiza", "Tayanne", "Ana"]
const nomeNovasPessoas = ["Abrantes", "Léa", "Fernanda", "Marcos"]

// remover o último elemento do meu array
// método pop - remove o último elemento do meu array
const pessoaRemovida = nomePessoas.pop()
console.log(nomePessoas, "REMOVIDO(A) ÚLTIMA POSIÇÃO: ", pessoaRemovida)

// remover o primeiro elemento do meu array
// método shift descola o meu array para esquerda, removendo o elemento da primeira posição.
const pessoaRemovidaPrimeiraPosicao = nomePessoas.shift()
console.log(nomePessoas, "REMOVIDO(A) PRIMEIRA POSIÇÃO", pessoaRemovidaPrimeiraPosicao)

// adicionar um elemento no final do meu array
// método push - adiciona um elemento no final do meu array
const adicionarPessoaNoFinalDoArray = nomePessoas.push('Maria')
console.log(nomePessoas, "PESSOA ADICIONADA NO FINAL DO ARRAY:", adicionarPessoaNoFinalDoArray)

// adicionar um elemento no começo do meu array
// método unshift - adiciona um elemento no começo do meu array
const adicionarPessoaNoComecoDoArray = nomePessoas.unshift('Luan')
console.log(nomePessoas, "PESSOA ADICIONA NO COMEÇO DO ARRAY", adicionarPessoaNoComecoDoArray)

// concatenar valores de um array ao outro
// método concat para juntar os valores de duas arrays
const concatenarArrays = nomePessoas.concat(nomeNovasPessoas)
console.log(concatenarArrays)

// concaternar valores de um array usando o spread operator
const concatenarArraysUsandoSpread = [...nomePessoas, ...nomeNovasPessoas]
console.log(concatenarArraysUsandoSpread)

// excluir elementos existentes, inserir novos elementos e substituir
// elementos em um array JavaScript.
// primeiro parâmetro recebe a posição do array, ou melhor de qual posição vai inicializar 
// segundo parâmetro é a quantidade a ser removida.
const excluirEAdicionarElementosDoArray = nomePessoas.splice(2, 0)
console.log("AQUI", excluirEAdicionarElementosDoArray)





