// Variables (beginning)
var name // a declared variable and is initialized. Global scope now, and is a bad thing.

let foo // these are keywords, and they help define variables. That can be changed.

const bar = 'a' // these are keywords, and they help define variables. Cannot be changed, short for constant. Needs a val.

    // = is a assignment operator. "is assigned the val of..."

    const ANSWER = 42 //ANSWER constant can't be set to a diff. val

// Strings

let str1 = 'hello world!'

let str2 = 'bye bye.'

let str3 = new String('hello new world!')

// Numbers

let myNum = 123

let myNum2 = 1.23

'1' == 1 //true, because of type coercion and loose equality checking.
'1' === 1 //false, because this is strict equality checking

// Boolean

let myBool = false

// Array

let myArray = [ // an empty array

]

let myArray2 = [
    42, 'bob', 
    [2, 'help'],
    myBool, true
]

myArray2.length
//.shift() and .pop()


// Object
let minObject = {};


// Functions

// funciton myFunction() {
//     return 'my f in chat for ya';
// };

function sumTwoThings(one, two) {
    return one + two;
};

const theFunction = () => 'I am awesome';

//higher order function is a function that accepts another funcion as a parameter
//filter, map and reduce are the most popular, but forEach, every, find, and some are also HOFs

//filter method example, filter returns and array that passes the filter test


const pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels"
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire"
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire"
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels"
    }
  ];
  
  const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
  const empire = pilots.filter((pilot) => {
    return pilot.faction === "Empire";
  });
  
  // Array helper method 'map'
  
  const pilotsWithDate = pilots.map((pilot) => {
    let date = new Date();
    pilot.date = date.toLocaleDateString("en-US");
    return pilot;
  });
  
  let filmURLs = [
    "https://swapi.co/api/films/",
    "https://swapi.co/api/films/5/",
    "https://swapi.co/api/films/4/this one is longer... even longer",
    "https://swapi.co/api/films/6/",
    "https: ",
    "https://swapi.co/api/films/1/"
  ];
  
  const filmLengths = filmURLs.map((filmURL) => filmURL.length);
  
  const filmPlusMore = filmURLs.map((filmURL) => {
    let filmObj = {
      index: filmURL,
      foo: "Bar"
    };
    return filmObj;
  });


const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0) // add all pilots years to accumalator

const mostExpPilot = pilots.reduce((oldest, pilot) => {
  return (oldest.years || 0) > pilot.years ? oldest : pilot 
}, {}) // ternary operator ^ Syntax: condistion ? exprIfTrue: exprIfFalse
