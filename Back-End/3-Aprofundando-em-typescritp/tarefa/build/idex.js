"use strict";
// Exercício 1
const myString = "Aurelio";
const myNumber = 1;
const user1 = {
    name: "Aurelio",
    age: 30,
    colour: 'red'
};
const user2 = {
    name: "Ana",
    age: 25,
    colour: 'yellow'
};
const user3 = {
    name: "Afonso",
    age: 28,
    colour: 'blue'
};
// Exercício 2
function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
const posts = [
    {
        author: "Alvo Dumbledore",
        text: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        author: "Severo Snape",
        text: "Menos 10 pontos para Grifinória!"
    },
    {
        author: "Hermione Granger",
        text: "É levi-ô-sa, não levio-sá!"
    },
    {
        author: "Dobby",
        text: "Dobby é um elfo livre!"
    },
    {
        author: "Lord Voldemort",
        text: "Avada Kedavra!"
    }
];
// b) Entrada: posts e o autor | Saída: nome do autor filtrado
function buscarPostsPorAutor(posts, autorInformado) {
    return posts.filter((post) => {
        return post.author === autorInformado;
    });
}
console.log(buscarPostsPorAutor);
