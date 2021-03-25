import { people } from '../data/people.js'
import { removeChildren, getLastNumber } from '../utility_functions/index.js'
import { addStarField, getRandomPosition } from '../utility_functions/index.js'

const mainContent = document.querySelector('#main')

const mainHeader = document.createElement('header')

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
maleButton.addEventListener('click', () => {
    populateDOM(maleCharacters)
    
})
const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => {
    populateDOM(femaleCharacters)
    
})

const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
otherButton.addEventListener('click', () => {
    populateDOM(otherCharacters)
    
})

mainHeader.appendChild(maleButton)
document.body.insertBefore(mainHeader, mainContent)

mainHeader.appendChild(femaleButton)
document.body.insertBefore(mainHeader, mainContent)

mainHeader.appendChild(otherButton)
document.body.insertBefore(mainHeader, mainContent)

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => {
    if (person.gender === "n/a" || person.gender === "none" || person.gender === "hermaphrodite") {
        return person
    } 
})

function populateDOM(characters) {
    removeChildren(mainContent)
    characters.forEach(person => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        const charCaption = document.createElement('figcaption')
        let charNum = getLastNumber(person.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        
        charCaption.textContent = person.name

        charFigure.classList.add('sw-figure')
        charImg.classList.add('sw-img')
        charCaption.classList.add('sw-figcap')
    
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
        mainContent.appendChild(charFigure)
        // console.log(charFigure)
    })
    
}
populateDOM(maleCharacters) // allows characters page to be a bit more full, from getgo


// nav poggers

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });
        //burger animation
        burger.classList.toggle('toggle');

    });

    
}

navSlide()


