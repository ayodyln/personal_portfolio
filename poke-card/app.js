//Total Pokemon: 898; Target for assignmetn: 25

const pokeGrid = document.querySelector(".pokeGrid");
const loadButton = document.querySelector(".loadPoke");

loadButton.addEventListener("click", () => {
  loadPage();
});

async function getAPIData(url) {
  try {
    const response = await fetch(url); // try getting data from the API at the url provided
    const data = await response.json();
    // convert the response into JSON
    console.log(data)
    return data;
    // return the data from the function to whoever called it
  } catch (error) {
    // must have been an error
    console.log(error);
  }
}

// function fetchPokemonData(pokemon) {
//   let url = pokemon.url; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
//   fetch(url)
//     .then((response) => response.json())
//     .then((pokeData) => { // two ways to define a function, => or check on line 56
//       console.log(pokeData);
//     });
// }

// function fetchPokeUrl() {
//   let url = data.url;
//   fetch(url)
//     .then((response) => response.json())
//     .then((pokeData) => {
//       console.log(pokeData);
//     });
// }




function loadPage() {
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then((data) => {
    for (const singlePokemon of data.results) {
      populatePokeCard(singlePokemon);
    }
  });
}



loadPage()


function populatePokeCard(singlePokemon) {
  //use the same html as code example for assignment page for cardflip example

  let pokeScene = document.createElement("div");
  let pokeCard = document.createElement("div");

  const pokeFigureFront = document.createElement("figure");
  const pokeImgFront = document.createElement("img");
  const pokeFigcapFront = document.createElement("figcaption");

  //front
  // pokeImgFront.src = poke.imgURL;

  //make card front and back
  //append them all to pokegrid

  console.log(singlePokemon);
}

// ****----------------------------------**** //

//TEST CODE - me trying to learn more about api data. Above code was confusing me too much.

// const pokeGrid = document.querySelector('.pokegrid')

//   // this function fetchs my desired api, and converts to a json. Then gathers the data I want.
// function pokeDataApp() {
//   fetch("https://pokeapi.co/api/v2/pokemon?limit=25")
//     .then((response) => response.json())
//     .then(function (allpokemon) {
//       allpokemon.results.forEach(function (pokemon) {
//         fetchPokemonData(pokemon);
//       });
//     });
// }

// function fetchPokemonData(pokemon) {
//   let url = pokemon.url; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
//   fetch(url)
//     .then((response) => response.json())
//     .then((pokeData) => { // two ways to define a function, => or check on line 56
//       console.log(pokeData);
//     });
// }

// // was learning this ^^^^^^

// function createPokeImage(pokeID, pokeGrid){
//   let pokeImgContainer = document.createElement('div')
//   pokeImgContainer.classList.add('image')

//   let pokeImage = document.createElement('img')
//   pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

//   pokeImgContainer.append(pokeImage);
//   pokeGrid.append(pokeImgContainer);
// }

// pokeDataApp();
