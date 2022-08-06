const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
  { nome: "Tayanne", raca: "Poodle" },
];

// a) Crie um novo array que contenha apenas o nome dos doguinhos
const nomeDogs = pets.map((cachorro) => {
  return cachorro.nome;
});

// b) Crie um novo array apenas com os [cachorros salsicha]
const salsichas = pets.filter((cachorro) => {
  return cachorro.raca === "Salsicha";
});
// c) Crie UM NOVO ARRAY que possuirá mensagens para enviar para todos os clientes QUE SÃO POODLE. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
const desconto = pets
  .filter((cachorro) => {
    return cachorro.raca === "Poodle";
  })
  .map((poodle) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`;
  });

// console.log(promocao);

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: " Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a) Crie um novo array que contenha apenas o nome de cada item
const nomeProdutos = produtos.map((produto) => {
  return produto.nome;
});

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const promocao = produtos.map((produto) => {
  const objeto = {
    nome: produto.nome,
    preco: (produto.preco * 0.95).toFixed(2),
    // 100% = 5% - 95 por cento
    // 95 / 100 = 0.95
  };
  return objeto;
});
// console.log(promocao);

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const bebidas = produtos.filter((prod) => {
  return prod.categoria === "Bebidas";
});

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const ype = produtos.filter((produto) => produto.nome.includes("Ypê")); //APENAS UMA AÇÃO PODE UTILIZAR A SINTAXE DE RETURN IMPLICITO
console.log(ype);

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const produtosYpe = ype.map((ype) => {
  return `Compre ${ype.nome} por ${ype.preco}`;
}); // SINTAXE VERBOSA

// console.log(produtosYpe);

//DESAFIO
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
//DICA - pesquisar sort()
const nomePoke = pokemons.map((poke) => poke.nome).sort(); // sem a funçao, o comportamento é padrao = ascendente
console.log(nomePoke);

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
const colecaoSemRepeticao = new Set(); //COLEÇÃO UNICA
// Pesquisar objeto Set
pokemons.map((pokemon) => {
  colecaoSemRepeticao.add(pokemon.tipo);
});
// console.log(noRep);

// Para entender os desafios, leia a documentação de sort() e Set
