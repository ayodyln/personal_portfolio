//Total Pokemon: 898; Target for assignmetn: 25

import { removeChildren } from "../utility_functions/index.js";

const pokeGrid = document.querySelector(".pokeGrid");

//loader
// window.addEventListener('load', () => {
//   const preLoad = document.querySelector('.preload')
//   preLoad.classList.add('preload-finish')
// })


//Buttons

const loadButton = document.querySelector("#genone-button");
const genTwoButton = document.querySelector("#gentwo-button");
const genThreeButton = document.querySelector("#genthree-button");
const genFourButton = document.querySelector("#genfour-button");
const genFiveButton = document.querySelector("#genfive-button");
const genSixButton = document.querySelector("#gensix-button");
const genSevenButton = document.querySelector("#genseven-button");
const genEightButton = document.querySelector("#geneight-button");


loadButton.addEventListener("click", () => {
  genPage(151, 0);
});
genTwoButton.addEventListener("click", () => {
  genPage(100, 151);
});
genThreeButton.addEventListener("click", () => {
  genPage(135, 251);
});
genFourButton.addEventListener("click", () => {
  genPage(107, 386);
});
genFiveButton.addEventListener("click", () => {
  genPage(156, 493);
});
genSixButton.addEventListener("click", () => {
  genPage(72, 649);
});
genSevenButton.addEventListener("click", () => {
  genPage(88, 721);
});
// genEightButton.addEventListener('click', () => {
//   genEightPage()
// })

//buttons end

//Calling for api, awaiting resonse and return it as data, then functions for specific data ranges.

async function getAPIData(url) {
  try {
    const response = await fetch(url); // try getting data from the API at the url provided
    const data = await response.json(); // convert the response into JSON
    return data; // return the data from the function to whoever called it
  } catch (error) {
    // must have been an error
    // console.log(error);
    window.alert("Error Fetching Data")
  }
}

function genPage(limit, offset) {
  removeChildren(pokeGrid);
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    async (data) => {
      for (const singlePokemon of data.results) {
        await getAPIData(singlePokemon.url).then((pokeData) =>
          populatePokeCard(pokeData)
        );
      }
    }
  );
}

//calling api section end

//search bar

const fetchButton = document.querySelector('.fetchPokemonByID')

fetchButton.addEventListener('click', () => {
  let pokeId = prompt("Pokemon ID or Name").toLowerCase()
  getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).then(
    (data) => populatePokeCard(data)
  ).catch(error => console.log(error)) 
  // console.log(pokeId)
})

class Pokemon {
  constructor(name, height, weight, abilities, moves) {
    this.id = 899
    this.name = name
    this.height = height
    this.width = weight
    this.abilities = abilities
    this.moves = moves
    this.sprites = {
      front_default: 'images/pokeball-front.png',
      front_shiny: 'images/pokeball-shiny.png'
    }
    this.forms = []
    this.types = [
      {
      type: {
        name: "normal",
      }
      }
    ]
  }
}

const newButton = document.querySelector('.newPokemon')
newButton.addEventListener('click', () => {
  let pokeName = prompt("What is the name of your new Pokemon?")
  let pokeHeight = prompt("Pokemon Height?")
  let pokeWeight = prompt("Pokemon Weight?")
  let newPokemon = new Pokemon(
    pokeName, 
    pokeHeight, 
    pokeWeight,
    ['eat', 'sleep'],
    ['study', 'drink', 'game']
    )
  populatePokeCard(newPokemon)
})

//populating page section

function populatePokeCard(singlePokemon) {
  // use the same html as in the CodePen Card flip example
  let pokeScene = document.createElement("div");
  pokeScene.className = "scene";
  let pokeCard = document.createElement("div");
  pokeCard.className = "card";
  pokeCard.addEventListener("click", () => {
    pokeCard.classList.toggle("is-flipped");
  });
  // make the card front
  pokeCard.appendChild(populateCardFront(singlePokemon));
  // make the card back
  pokeCard.appendChild(populateCardBack(singlePokemon));
  // append them all to pokeGrid
  pokeScene.appendChild(pokeCard);
  pokeGrid.appendChild(pokeScene);
}

function populateCardFront(pokemon) {
  console.log(pokemon);

  let pokeFront = document.createElement("div");
  pokeFront.className = "card__face card__face--front";

  let frontLabel = document.createElement("h3");
  frontLabel.textContent = pokemon.name;

  let frontImage = document.createElement("img");
  frontImage.className = "front-img-pokemon";
  // frontImage.src = `poke-img/${getImageFileName(pokemon)}.png`;
  frontImage.src = getImageFileName(pokemon)
  // frontImage.src = altImg(pokemon)
  

  let pokemonID = document.createElement("h2");
  pokemonID.className = ".pokeID";
  pokemonID.textContent = pokemon.id;

  pokeFront.appendChild(pokemonID);
  pokeFront.appendChild(frontImage);
  pokeFront.appendChild(frontLabel);

  return pokeFront;
}

function populateCardBack(pokemon) {
  let pokeBack = document.createElement("div");
  pokeBack.className = "card__face card__face--back";

  let pokeBackImgs = document.createElement("div"); //img div
  pokeBackImgs.className = "pokeback-img";

  let pokeBackSprite = document.createElement("img");
  pokeBackSprite.className = "pokespriteback";
  pokeBackSprite.src = pokemon.sprites.front_default;

  let pokeBackSprite_back = document.createElement("img");
  pokeBackSprite_back.className = "pokespriteback";
  pokeBackSprite_back.src = pokemon.sprites.front_shiny;

  let pokeBackText = document.createElement("div"); //text div
  pokeBackText.className = "pokebacktext";

  let backLabel = document.createElement("p");
  backLabel.textContent = `Moves: ${pokemon.moves.length}`;

  let backLabelForms = document.createElement("p");
  backLabelForms.textContent = `Forms: ${pokemon.forms.length}`;

  let backLabelTypes = document.createElement("p");
  backLabelTypes.textContent = `Types: ${pokemon.types
    .map((type) => type.type.name)
    .join(", ")}`;

  let backlabelWeight = document.createElement("p");
  backlabelWeight.textContent = `Weight: ${pokemon.weight}`;

  pokeBackImgs.appendChild(pokeBackSprite);
  pokeBackImgs.appendChild(pokeBackSprite_back);

  pokeBack.appendChild(pokeBackImgs); //div for pokemon back img sprites.

  pokeBackText.appendChild(backLabel);
  pokeBackText.appendChild(backLabelForms);
  pokeBackText.appendChild(backLabelTypes);
  pokeBackText.appendChild(backlabelWeight);

  pokeBack.appendChild(pokeBackText);

  return pokeBack;
}

function getImageFileName(pokemon) {
  let pokeId
    if (pokemon.id < 10) pokeId = `00${pokemon.id}`
    if (pokemon.id > 9 && pokemon.id < 100) pokeId = `0${pokemon.id}`
    if (pokemon.id > 99 && pokemon.id < 810) pokeId = pokemon.id
    if (pokemon.id === 899) {
      return `img/pokeball-logo.png`
    }

    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeId}.png`
}

(function () {
  console.log('bir')
})();

//end of population section
