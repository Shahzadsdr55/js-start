// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console(id == anotherId);

const bigNumber = 34321443145398765n 

// Reference (Non premitive)

// Array, Objects, Functions



const heroes =["Shahzad","Shahbaz","Shahnawaz"]
let myObj = {
    name: "Shahzad",
    age: 26,
}

const myFunction = function(){
    console.log("Hii");
}

console.log(typeof anotherId);

// https://262.ecma-internetional.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (P), Heap (Non-Primitive)

let myname = "Shahzad Khan"

let anothername = myname
    anothername = "Shahbaz Khan"

    console.log(myname);
    console.log(anothername);