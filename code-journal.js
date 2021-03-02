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

funciton myFunction() {
    return 'my f in chat for ya';
};

function sumTwoThings(one, two) {
    return one + two;
};

const theFunction = () => 'I am awesome';
