import { films } from '../data/films.js'
import { getLastNumber } from '../utility_functions/index.js'
import { addStarField, getRandomPosition } from '../utility_functions/index.js'

let movieList = document.querySelector('.movieList')

for (let i = 0; i < films.length; i++) {
    const foundFilm = films.find(film => getLastNumber(film.url) === (i + 1))
    
    let figure = document.createElement('figure')
    let newImage = document.createElement('img')
    let figCaption = document.createElement('figcaption')
    newImage.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    figCaption.textContent = foundFilm.title

    // newItem.textContent = foundFilm.title
    // titlelist.appendChild(newItem)

    figure.appendChild(newImage)
    figure.appendChild(figCaption)
    movieList.appendChild(figure)


    console.log(foundFilm)
}


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

addStarField(document.querySelector('body'), 250)