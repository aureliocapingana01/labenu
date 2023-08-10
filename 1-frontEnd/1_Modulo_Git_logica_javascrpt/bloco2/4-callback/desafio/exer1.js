// a - Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const nomes = pokemons.map((pokemon) => {
    return pokemon.nome;
  });
  
  const pokemonsOrdenados = nomes.sort((a, b) => a - b);
  
  console.log(pokemonsOrdenados);