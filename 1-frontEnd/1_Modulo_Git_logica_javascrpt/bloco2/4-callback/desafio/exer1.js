// a - Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Psyduck", tipo: "água" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Squirtle", tipo: "água" },
 ]

 const nomes = pokemons.map((pokemon) => {
    return pokemon.nome;
  });
  
  const pokemonsOrdenados = nomes.sort((a, b) => a.localeCompare(b));
  
  console.log(pokemonsOrdenados);