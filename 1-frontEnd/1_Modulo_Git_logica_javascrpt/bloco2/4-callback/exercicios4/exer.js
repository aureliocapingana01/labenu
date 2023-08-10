// Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a) Crie um novo array que contenha apenas o nome de cada item

 const nomesProdutos = produtos.map((produto) => {
    return produto.nome
 })

//  console.log(nomesProdutos)


//  b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const descontoNoProduto = produtos.map((produto) => {
    return { nome: produto.nome, preco: (produto.preco * 0.95).toFixed(2) }
})
// console.log(descontoNoProduto)

//  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const bebidas = produtos.filter((produto) => {
    return produto.categoria == 'Bebidas'
})

// console.log(bebidas)



//  d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const ype = produtos.filter((produto) => {
    return produto.nome.includes('Ypê')
})

// console.log(ype)


//  e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const compreYpe = ype.map((produto) => {
  return `Compre ${produto.nome} por ${produto.preco}`;
});

console.log("item e", compreYpe);