// Acessando objetos dentro de objetos
const paiDePet = {
    nome: "Caio Teixeira",
    pet: {
      nome: "Lupin",
      raca: "Salsicha", 
      idade: 1
  }
  }

  // const pet = paiDePet.pet 
  // console.log("pet:", pet)

  // const nomePet = pet.nome
  // console.log("nome pet:", nomePet)

  const nomePet = paiDePet.pet.nome
  console.log("nome pet:", nomePet)
  

// Acessando arrays dentro de objetos 
const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
  }

console.log("curso", curso)
const primeiraLinguagem = curso.linguagens[0]
console.log("primeira linguagem", primeiraLinguagem)



// Array de objetos
const instrutoras = [
    {nome: "Lais", modulo: 1},
    {nome: "Amanda",modulo: 2}, 
    {nome: "Chijo",modulo: 3}
  ]

  const nomeTerceiraInstrutora = instrutoras[2].nome
  console.log("nome instrutora:", nomeTerceiraInstrutora)



// Adicionando propriedades

curso.numeroEstudantes = 50

console.log("novo curso", curso)