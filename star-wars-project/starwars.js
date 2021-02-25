import { films } from '../DATA/films.js'

// let itemOne = document.querySelector('#item1')
// let itemTwo = document.querySelector('#item2')
// let itemThree = document.querySelector('#item3')

// itemOne.textContent = films[2].title
// itemTwo.textContent = films[1].title
// itemThree.textContent = films[3].title

// console.log(films[0].title)

let titlelist = document.querySelector('.titleList')

for (var i = 0; i < films.length; i++) {
    let title = films[i].title;
    let newItem = document.createElement('li')
    newItem.textContent = title
    titlelist.appendChild(newItem)
}