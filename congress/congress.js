import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives.js";
import { removeChildren } from "../utility_functions/index.js";

// console.log(senators)

const congressGrid = document.querySelector(".congressGrid");
const seniorityButton = document.querySelector('#Seniority')
const birthdayButton = document.querySelector("#birthdayButton");

const senatorsButton = document.querySelector('#senators-button')
senatorsButton.addEventListener('click', () => {
  populateCongressDiv(getSimplifiedPeople(senators));
})

const representativesButton = document.querySelector('#representatives-button')
representativesButton.addEventListener('click', () => {
  populateCongressDiv(getSimplifiedPeople(representatives))
})

function populateCongressDiv(simplifiedList) {
  removeChildren(congressGrid)
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
      seniority: parseInt(person.seniority, 10)
    };
  });
}

const repubButton = document.querySelector("#republicans");
repubButton.addEventListener("click", () => {
  populateCongressDiv(getSimplifiedPeople(showRepublicans()))
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


seniorityButton.addEventListener('click', () => senioritySort())

function senioritySort() {
  if (populateCongressDiv(getSimplifiedPeople(senators).sort((a, b) => a.seniority - b.seniority).reverse()));
  if (populateCongressDiv(getSimplifiedPeople(representatives).sort((a, b) => a.seniority - b.seniority).reverse()));
}

  // calling functions




// ------------------------------------------------------------------ //


