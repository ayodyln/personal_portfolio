import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives.js";
import { removeChildren } from "../utility_functions/index.js";

// console.log(senators)

const congressGrid = document.querySelector(".congressGrid");
const seniorityButton = document.querySelector('#Seniority')
const birthdayButton = document.querySelector("#birthdayButton");
const missedVotes = document.querySelector('#missedVotes')


const senatorsButton = document.querySelector('#senators-button')
let congressPeople = 'senators'

senatorsButton.addEventListener('click', () => {
  populateCongressDiv(getSimplifiedPeople(senators));
  congressPeople = 'senators'
})

const representativesButton = document.querySelector('#representatives-button')
representativesButton.addEventListener('click', () => {
  populateCongressDiv(getSimplifiedPeople(representatives))
  congressPeople = 'representatives'
})

// missedVotes.addEventListener('click', () => {
//   console.log(missedVotesMember(senators))
//   //alert(missedVotesMember(senators))
// }
// )

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
    
    let partyIcon = document.createElement('i')
        if (person.party === 'R') partyIcon.className = 'fas fa-republican'
        if (person.party === 'D') partyIcon.className = 'fas fa-democrat'
        if (person.party === 'ID') partyIcon.className = 'fas fa-mitten'


    figImg.src = person.imgURL;
    figCaption.textContent = person.name;

    figCaption.appendChild(partyIcon)
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
      seniority: parseInt(person.seniority, 10),
      missed_votes_pct: person.missed_votes_pct,
      party: person.party
    };
  });
}

const repubButton = document.querySelector("#republicans");
repubButton.addEventListener("click", () => {
  populateCongressDiv(filterCongressPeople(senators, 'R'))
});


seniorityButton.addEventListener('click', () => {
  if (congressPeople == 'senators') senioritySort(senators)
  if (congressPeople === 'representatives') senioritySort(representatives)
})

function senioritySort(congressPeople) {
  populateCongressDiv(getSimplifiedPeople(congressPeople).sort((a, b) => a.seniority - b.seniority).reverse())
}

const filterCongressPeople = (chamber, politicalParty) => {
  return getSimplifiedPeople(chamber).filter(member => member.party === politicalParty)
}

const missedVotesMember = (chamber) => {
  const highestMissedVotesPerson = getSimplifiedPeople(chamber).reduce((acc, member) => acc.missed_votes_pct > member.missed_votes_pct ? acc : member)
  return getSimplifiedPeople(chamber).filter((person) => person.missed_votes_pct === highestMissedVotesPerson.missed_votes_pct)
}

  // calling functions




// ------------------------------------------------------------------ //


