const pokedex = document.getElementById("pokedex");


const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 898; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  
  Promise.all(promises).then((results) => {
    // console.log(results)
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      front_image: data.sprites["front_default"],
      back_image: data.sprites["back_default"],
      type: data.types.map((type) => type.type.name).join(", "),
      
    }));
   
    displayPokemon(pokemon);
    console.log(pokemon)
  });
};

const displayPokemon = (pokemon) => {
  // console.log(pokemon)
  const pokemonTHMLString = pokemon
    .map(
      (pokemon) => `
    <li class = "poke-card">
        <img class = "card-image" src ="${pokemon.front_image}"/>
        <h2 class = "card-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class = "card-subtitle">Type: ${pokemon.type}</p>
    </li>
    `
    )
    .join("");
  pokedex.innerHTML = pokemonTHMLString;
};

fetchPokemon();

//help from https://youtube.com/watch?v=T-VQUKeSU1w
