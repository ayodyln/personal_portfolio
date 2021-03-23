import { starships } from '../data/starships.js'
import { getLastNumber, removeChildren } from '../utility_functions/index.js'

const main = document.querySelector('main')
const navList = document.querySelector('.navlist')
const shipView = document.querySelector('.shipview')
const dialogBox = document.querySelector('.modal')

const closeButton = document.querySelector('.modal-close')

closeButton.addEventListener('click', () => {
    dialogBox.classList.toggle('is-active')
})

const modalBackground = document.querySelector('.modal-background')

modalBackground.addEventListener('click', () => {
    dialogBox.classList.toggle('is-active')
})

function populateNav() {
    starships.forEach((starship) => {
        let aElement = document.createElement('a')
        aElement.href = '#'
        aElement.addEventListener('click', () => {
            // console.log(starship.name)
            populateShipView(starship)
        })
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        aElement.appendChild(listItem)
        navList.appendChild(aElement)
    })
}

function populateShipView(shipData) {
    removeChildren(shipView)
    console.log(shipData)
    let shipFigure = document.createElement('figure')
    let shipCaption = document.createElement('figcaption')
    let shipImage = document.createElement('img')
    let shipNum = getLastNumber(shipData.url)
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipImage.addEventListener('error', () => {
        shipImage.hidden = true
        dialogBox.classList.toggle('is-active') //a little too easy 
    })

    shipCaption.textContent = shipData.name

    shipFigure.appendChild(shipImage)
    shipFigure.appendChild(shipCaption)
    shipView.appendChild(shipFigure)
}

populateNav()

function addStarField(element, numStars) {
    element.style.setProperty('background-color', 'black')
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div')
        star.style.setProperty('width', '2px')
        star.style.setProperty('height', '2px')
        star.style.setProperty('background-color', 'white')
        let xy = getRandomPosition()
        star.style.left = `${xy[0]}px`
        star.style.top = `${xy[1]}px`
        star.style.setProperty('position', 'absolute')
        element.appendChild(star)
    }
}

function getRandomPosition() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
}

addStarField(document.querySelector('body'), 250)



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

//Pop-up msg

