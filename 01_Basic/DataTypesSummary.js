// Primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoogedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 23454555654n



// Referance Type (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "aman",
    age: 32,
}

const myFunction = function () {
    console.log("Hello World, Welcome to javaScript Repo")
}

// Using typeof for check the data types

console.log(typeof bigNumber)     // bigint
console.log(typeof score)         // number
console.log(typeof scoreValue)    // number
console.log(typeof isLoogedIn)    // boolean
console.log(typeof outsideTemp)   // object
console.log(typeof userEmail)     // undefined
console.log(typeof id)            // symbol
console.log(typeof anotherId)     // symbol
