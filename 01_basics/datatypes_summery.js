//  *****1. Primitive*****

//  7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) //false

// const bigNumber = 11123455564123789n


// *****2. Reference (Non primitive)*****

// Array, Objects, Functions

const heros = ["supriya", "soumalya", "subhara"]
let myObj = {
    name: "soumen",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros); //object
console.log(typeof myFunction); //function 


// *******************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Supriya"
let anotherNmae = myName

anotherNmae = "Soumalya"

console.log(myName); //Supriya
console.log(anotherNmae); //Soumalya

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "supriya@gmail.com"

console.log(userOne.email); //supriya@gmail.com
console.log(userTwo.email); //supriya@gmail.com

