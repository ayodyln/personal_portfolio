import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives.js";
import { removeChildren } from "../utility_functions/index.js";

console.log(senators)

const congressGrid = document.querySelector(".congressGrid");

const seniorityButton = document.querySelector("#seniorityButton");
const birthdayButton = document.querySelector("#birthdayButton");

function populateCongressDiv(simplifiedList) {
  // removeChildren(peopleList)
  simplifiedList.forEach((person) => {
    let personDiv = document.createElement("div");
    personDiv.className = "figureDiv";
    let personFig = document.createElement("figure");
    personFig.className = "personFig";
    let figImg = document.createElement("img");
    figImg.className = "figImg";
    let figCaption = document.createElement("figcaption");
    figCaption.className = "figCap";

    figImg.src = person.imgURL;
    figCaption.textContent = person.name;

    personFig.appendChild(figImg);
    personFig.appendChild(figCaption);
    personDiv.appendChild(personFig);
    congressGrid.appendChild(personDiv);
  });
}

function getSimplifiedPeople(peopleList) {
  return peopleList.map((person) => {
    let middleName = person.middle_name ? ` ${person.middle_name}` : ``;
    return {
      id: person.id,
      name: `${person.first_name}${middleName} ${person.last_name}`,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${person.govtrack_id}-100px.jpeg`,
    };
  });
}

const repubButton = document.querySelector("#republicans");
repubButton.addEventListener("click", () => {
  showRepublicans();
});

function showRepublicans() {
  //const repubs = representatives.filter(rep => rep.party === 'R')
  // TODO:  Looks like filter first then map would be best
  const repubs = representatives.map((rep) => {
    let smallRepub = {};
    if (rep.party === "R") {
      smallRepub.id = rep.id;
      smallRepub.name = `${rep.first_name} ${rep.middle_name} ${rep.last_name}`;
    }
    return smallRepub;
  });
  // console.log(senators)
  console.log(representatives)
}

const demoButton = document.querySelector("#democrats")
demoButton.addEventListener("click", () => {
  showDemocrats()
})

function showDemocrats () {
  const democ = representatives.map((dem) => {
    let smallDemo = {};
    if (dem.party === "D") {
      smallDemo.id = dem.id;
      smallDemo.name = `${dem.first_name} ${dem.middle_name} ${dem.last_name}`
    }
    return smallDemo
  })
  // console.log(senators)
  console.log(representatives)
}

const indeButton = document.querySelector("#independents")
indeButton.addEventListener("click", () => {
  showIndependents()
})



// calling functions

populateCongressDiv(getSimplifiedPeople(representatives, senators));
