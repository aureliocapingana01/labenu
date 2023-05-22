// Criação de objetos

const instrutor = {
    nome: "Rodrigo",
    idade: 32,
    email: "email@email.com",
    frontender: false, 
    resposabilidades: ["dar aula", "ajudar estudantes", "reclamar"],
    reclamar: () => {
        console.log("reclamei")
    }
}
console.log("objeto", instrutor)

// Acessando propriedades

const nomeInstrutor = instrutor.nome 
console.log("nome:", nomeInstrutor)

const emailInstrutor = instrutor["email"]
console.log("email:", emailInstrutor)

console.log("idade:", instrutor.idade)

// Redefinindo valores 

instrutor.nome = "Rodrigo Brezolin"
instrutor["email"] = "rodrigo@email.com"

console.log("valor alterados:", instrutor)