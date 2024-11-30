// let score = "30abc"  // NaN
// let score = null  // 0
// let score = undefined  // NaN
let score = true  // 1

console.log(typeof score)
console.log(typeof (score))  // using method

let valueInNumber = Number(score);

console.log(typeof valueInNumber)

console.log(valueInNumber)

let isLoggedIn = "Aman Kumar"
let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(booleanisLoggedIn)

// 1 => true
// 0 => false
// "" =>  false
// "aman kumar" => true

let someNumber = 13

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ******************* Operations *******************

let value = 3;
let negValue = -value
console.log(negValue)

// Arithmatic operation

console.table([2 + 2, 2 - 2, 2 * 2, 2 ** 2, 2 / 3, 2 % 3])  // Table for the arithmatic operation

let str1 = "hello"
let str2 = " aman"
let str = str1 + str2

console.log(str1 + str2)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 3 + "4")

console.log((3 + 4) * 5 % 4)


// This is not a good way for coding

console.log(true)  // true
console.log(+true)  // 1
console.log(false)  // falswe
console.log(+false) // 0
console.log("")
console.log(+"")   // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
let gameCounter = 100;
gameCounter++    // postfix
console.log(gameCounter)
++gameCounter    // prefix
console.log(gameCounter)


