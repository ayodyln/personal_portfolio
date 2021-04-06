//Total Pokemon: 898; Target for assignmetn: 25

import { removeChildren } from "../utility_functions/index.js";

const pokeGrid = document.querySelector(".pokeGrid");

const loadButton = document.querySelector(".loadPokemon");
const genTwoButton = document.querySelector('.gentwo-button')
const genThreeButton = document.querySelector('.genthree-button')

loadButton.addEventListener("click", () => {
  loadPage();
});

genTwoButton.addEventListener('click', () => {
  genTwoPage();
})

genThreeButton.addEventListener('click', () => {
  genThreePage()
})


async function getAPIData(url) {
  try {
    const response = await fetch(url); // try getting data from the API at the url provided
    const data = await response.json(); // convert the response into JSON
    return data; // return the data from the function to whoever called it
  } catch (error) {
    // must have been an error
    console.log(error);
  }
}

function loadPage() {
  removeChildren(pokeGrid)
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`).then(
    async (data) => {
      for (const singlePokemon of data.results) {
        await getAPIData(singlePokemon.url).then((pokeData) =>
          populatePokeCard(pokeData)
        );
      }
    }
  );
};



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
  let frontLabel = document.createElement("p");
  frontLabel.textContent = pokemon.name;
  let frontImage = document.createElement("img");
  frontImage.className = 'front-img-pokemon'
  frontImage.src = `poke-img/${getImageFileName(pokemon)}.png`;
  pokeFront.appendChild(frontImage);
  pokeFront.appendChild(frontLabel);
  return pokeFront;
}

function populateCardBack(pokemon) {
  let pokeBack = document.createElement("div");
  pokeBack.className = "card__face card__face--back";
  let backLabel = document.createElement("p");
  backLabel.textContent = `Moves: ${pokemon.moves.length}`;
  pokeBack.appendChild(backLabel);
  return pokeBack;
}

function getImageFileName(pokemon) {
  if (pokemon.id < 10) {
    return `00${pokemon.id}`;
  } else if (pokemon.id > 9 && pokemon.id < 100) {
    return `0${pokemon.id}`;
  } else if (pokemon.id > 99 && pokemon.id < 1000) {
    return `${pokemon.id}`
  }
}
