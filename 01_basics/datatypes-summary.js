//JavaScript is a dynamic language, 
//meaning that types are determined at runtime rather than at compile time


//  Primitive
// all primitives are call by value  (we get the copy of the refrence in it)
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions  all non-primitive data types are considered objects.

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {                           // objects ke liye {} use karte ha
    name: "hitesh",
    age: 22,
 }

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack ( primitive) , Heap ( Non- Primitive)

let myYoutubename = " piyushKumardotcom"
let anothername =  myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(myYoutubename);

let userOne = {
    email: " user@google.com" // objects 
    upi: "user@ybl"           // objects
}

;et userTwo = userOne    // non primituve data types sharre original refence of the value not an copy like primitives so the changes made by any one refrence variable will change the real object properties or object

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// stack ke andar koi chizz lenge toh hamesha uska copy milega aur heap me original refrence milta ha toh jo changes refrence variable karega woh baki sabke liye change hoga

