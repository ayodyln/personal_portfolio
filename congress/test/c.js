import { senators } from '../../data/senators.js'
import { representatives } from '../../data/representatives.js'
import {getLastNumber, removeChildren} from '../utils/index.js'

const main = document.querySelector("#main");

const mainHeader = document.createElement('header')
document.body.insertBefore(mainHeader, main)

// beginning of republican button
const repButton = document.createElement('button')
repButton.textContent = 'Republicans'
repButton.addEventListener('click', () => simplifiedMembers('R'))
mainHeader.appendChild(repButton)

const demButton = document.createElement('button')
demButton.textContent = 'Democrats'
demButton.addEventListener('click', () => simplifiedMembers(democrats))
mainHeader.appendChild(demButton)

const senButton = document.createElement('button')
senButton.textContent = 'Senators'
senButton.addEventListener('click', () => simplifiedMembers(senator))
mainHeader.appendChild(senButton)

const represButton = document.createElement('button')
represButton.textContent = 'Representative'
represButton.addEventListener('click', () => simplifiedMembers(representative))
mainHeader.appendChild(represButton)



const members = [...senators, ...representatives] //modern cambining arrays like a genus.
const republicans = filterArray.filter(person => person.party === 'R')
const democrats = filterArray.filter(person => person.party === 'D')
const senator = filterArray.filter(person => person.short_title === 'Sen.')
const representative = filterArray.filter(person => person.short_title === 'Rep.')

const senatorDiv = document.querySelector('.senators')
// const seniorityHeading = document.querySelector('.seniority')
// const weaselOrderedList = document.querySelector('.weaselList')




function simplifiedMembers(chamberFilter) {

  const filterArray = members.filter(member => chamberFilter ? member.short_title === chamberFilter : member)

  return filterArray.map(senator => {
    const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
    return {
      id: senator.id,
      name: `${senator.first_name}${middleName}${senator.last_name}`,
      party: senator.party,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
      gender: senator.gender,
      seniority: +senator.seniority,
      missedVotesPct: senator.missed_votes_pct,
      loyaltyPct: senator.votes_with_party_pct,
    }
  })
}



function populateSenatorDiv(simpleSenators) {
  removeChildren(senatorDiv)

  simpleSenators.forEach(senator => {
    let senFigure = document.createElement('figure')
    let figImg = document.createElement('img')
    let figCaption = document.createElement('figcaption')

    figImg.src = senator.imgURL

    figCaption.textContent = senator.name
    senFigure.appendChild(figImg)
    senFigure.appendChild(figCaption)
    senatorDiv.appendChild(senFigure)

  })
  
}


//I combined the populateDOM function with the populateSenatorDiv.

// function populateDOM(members) {
//   removeChildren(main)
//   populateSenatorDiv(simplifiedMembers())
//   console.log(members)




  


//const filterSenators = (prop, value) => simplifiedSenators().filter(senator => senator[prop] === value)
  
//const republicans = filterSenators('party', 'R')
//const femaleSenators = filterSenators('gender', 'F')

//console.log(republicans, femaleSenators)

//const mostSeniorMember = simplifiedMembers().reduce((acc, senator) => {
  //return acc.seniority > senator.seniority ? acc : senator 
//})

// seniorityHeading.textContent = `The most senior member of Congress is ${mostSeniorMember.name} who has taken our tax dollars as salary for more than ${mostSeniorMember.seniority} years!`

//const mostLoyal = simplifiedMembers().reduce((acc, senator) => {
  //if(senator.loyaltyPct === 100) {
   // acc.push(senator)
  //}
  //return acc
//}, [])

// const biggestWeasel = simplifiedMembers().reduce((acc, senator) => 
// (acc.missedVotesPct || 0) > senator.missedVotesPct ? acc : senator, {})

// const biggestWeasels = simplifiedMembers().filter(senator => senator.missedVotesPct >= 50)

// console.log(biggestWeasels)

// biggestWeasels.forEach(weasel => {
//   let listItem = document.createElement('li')
//   listItem.textContent = weasel.name
//   weaselOrderedList.appendChild(listItem)
// })



const demoButton = document.querySelector("#democrats");
demoButton.addEventListener("click", () => {
  if (congressPeople === "senators")
    populateCongressDiv(filterCongressPeople(senators, "D"));
  if (congressPeople === "representatives")
    populateCongressDiv(filterCongressPeople(representatives, "D"));
});

const filterCongressPeople = (chamber, politicalParty) => {
  return getSimplifiedPeople(chamber).filter(
    (member) => member.party === politicalParty
  );
};