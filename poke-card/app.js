//Total Pokemon: 898; Target for assignmetn: 25

// const fetchPokemon  = () => {
//     const promises = []
//     for (let i = 1; i <= 25; i++) {
//         const url = `https://pokeapi.co/api/v2/pokemon/${i}`
//         promises.push(fetch(url).then((res) => res.json()))
//     }
// }

const pokeGrid = document.querySelector(".pokeGrid");
const loadButton = document.querySelector(".loadPoke");

loadButton.addEventListener("click", () => {
  loadPage();
});

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
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then((data) => {
    for (const singlePokemon of data.results) {
      populatePokeCard(singlePokemon);
    }
  });
}

function populatePokeCard(singlePokemon) {
  //use the same html as code example for assignment page for cardflip example
  let pokeScene = document.createElement("div");
  let pokeCard = document.createElement("div");
  //make card front and back
  //append them all to pokegrid

  console.log(singlePokemon);
}
