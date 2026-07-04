// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol

const score = false
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId)

const bigNumber = 23234657485232434n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "nagraj", "doga"]
let myObj ={
    name : "Unnati",
    age : 32,
    gender : "female"

}
// console.table(myObj)

const myFunction = function(){
    console.log("Hello Unnati");
}
console.log(myFunction())
console.log(typeof myFunction)