//Total Pokemon: 898; Target for assignmetn: 25

import { removeChildren } from "../utility_functions/index.js";

const pokeGrid = document.querySelector(".pokeGrid");



//search bar

let pokeSearch = []
const searchBar = document.querySelector('#searchBar')

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value
  const filteredPokemonSearch = pokeSearch.filter( (pokemon) => {
    return (
      pokemon.name.includes(searchString) || pokemon.id.includes(searchString)
    )
  })
  console.log(filteredPokemonSearch)
})

//Buttons

const loadButton = document.querySelector("#genone-button");
const genTwoButton = document.querySelector('#gentwo-button')
const genThreeButton = document.querySelector('#genthree-button')
const genFourButton = document.querySelector('#genfour-button')
const genFiveButton = document.querySelector('#genfive-button')
const genSixButton = document.querySelector('#gensix-button')
const genSevenButton = document.querySelector('#genseven-button')
const genEightButton = document.querySelector('#geneight-button')

loadButton.addEventListener("click", () => {
  loadPage();
});
genTwoButton.addEventListener('click', () => {
  genTwoPage();
})
genThreeButton.addEventListener('click', () => {
  genThreePage()
})
genFourButton.addEventListener('click', () => {
  genFourPage()
})
genFiveButton.addEventListener('click', () => {
  genFivePage()
})
genSixButton.addEventListener('click', () => {
  genSixPage()
})
genSevenButton.addEventListener('click', () => {
  genSevenPage()
})
// genEightButton.addEventListener('click', () => {
//   genEightPage()
// })

//buttons end


// document.location.reload(true)

//Calling for api, awaiting resonse and return it as data, then functions for specific data ranges.

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

function genTwoPage() {
  removeChildren(pokeGrid)
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=151`).then(
    async (data) => {
      for (const singlePokemon of data.results) {
        await getAPIData(singlePokemon.url).then((pokeData) =>
          populatePokeCard(pokeData)
        );
      }
    }
  );
};

function genThreePage() {
  removeChildren(pokeGrid)
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=135&offset=251`).then(
    async (data) => {
      for (const singlePokemon of data.results) {
        await getAPIData(singlePokemon.url).then((pokeData) =>
          populatePokeCard(pokeData)
        );
      }
    }
  );
}

function genFourPage() {
  removeChildren(pokeGrid)
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=107&offset=386`).then(
    async (data) => {
      for (const singlePokemon of data.results) {
        await getAPIData(singlePokemon.url).then((pokeData) =>
          populatePokeCard(pokeData)
        );
      }
    }
  );
}

function genFivePage() {
  removeChildren(pokeGrid)
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=156&offset=493`).then(
    async (data) => {
      for (const singlePokemon of data.results) {
        await getAPIData(singlePokemon.url).then((pokeData) =>
          populatePokeCard(pokeData)
        );
      }
    }
  );
}

function genSixPage() {
  removeChildren(pokeGrid)
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=72&offset=649`).then(
    async (data) => {
      for (const singlePokemon of data.results) {
        await getAPIData(singlePokemon.url).then((pokeData) =>
          populatePokeCard(pokeData)
        );
      }
    }
  );
}

function genSevenPage() {
  removeChildren(pokeGrid)
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=88&offset=721`).then(
    async (data) => {
      for (const singlePokemon of data.results) {
        await getAPIData(singlePokemon.url).then((pokeData) =>
          populatePokeCard(pokeData)
        );
      }
    }
  );
}

// function genEightPage() {
//   removeChildren(pokeGrid)
//   getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=89&offset=809`).then(
//     async (data) => {
//       for (const singlePokemon of data.results) {
//         await getAPIData(singlePokemon.url).then((pokeData) =>
//           populatePokeCard(pokeData)
//         );
//       }
//     }
//   );
// }

//calling api section end

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
  frontImage.className = 'front-img-pokemon'
  frontImage.src = `poke-img/${getImageFileName(pokemon)}.png`;

  let pokemonID = document.createElement('h2');
  pokemonID.className = ".pokeID";
  pokemonID.textContent = pokemon.id

  pokeFront.appendChild(pokemonID)
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

//end of population section


