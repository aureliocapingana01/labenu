//  b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const tipos = pokemons.map((pokemon) => {
    return pokemon.tipo;
  });
  
//   console.log(tipos);
  
  const tiposSemRepetir = tipos.filter((tipo, index, array) => {
    return array.indexOf(tipo) === index;
  });
  
  console.log(tiposSemRepetir);