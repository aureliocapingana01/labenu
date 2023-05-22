// Espalhamento - objetos

const usuario = {
    nome: '',
    idade: 25,
    email: 'astrodev@labenu.com.br'
  }

const novoUsuario = {
  ...usuario,
  nome: "Rodrigo",
  sobrenome: "Brezolin Buquera",
  corDoSapato: false,
  idade: 32
}

// console.log("usuario", usuario)
// console.log("novo usuario", novoUsuario)

// Espalhamento - arrays

const listaDeNomes = ["Pedro", "Chijo", "Amanda"] 
const novaLista = ["Luan", ...listaDeNomes, "Rodrigo"]

console.log("nova lista:", novaLista)


