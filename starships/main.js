import { starships } from '../data/starships.js'

const main = document.querySelector('main')
const navList = document.querySelector('.navlist')
const shipView = document.querySelector('.shipview')

function populateNav() {
    starships.forEach((starship) => {
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        navList.appendChild(listItem)
    })
}

function populateShipView(shipData) {
    // removeChildren(mainContent)
    starships.forEach(starship => {
        let shipFigure = document.createElement('figure')
        let shipImage = document.createElement('img')
        let shipNum = getLastNumber(starship.url)
        shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`

        const shipCaption = document.createElement('figcaption')

        shipCaption.textContent = starship.name

        shipView.appendChild(shipImage)
        shipView.appendChild(shipCaption)
        // mainContent.appendChild(shipFigure)
    })
}


// function removeChildren(container) {
//     while (container.firstChild) {
//     container.removeChild(container.firstChild);
//     }
// }

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

populateNav()
populateShipView()