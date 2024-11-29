// let score = "30abc"  // NaN
// let score = null  // 0
// let score = undefined  // NaN
let score = true  // 1

console.log (typeof score)
console.log (typeof (score))  // using method

let valueInNumber = Number (score);

console.log (typeof valueInNumber)

console.log (valueInNumber)

let isLoggedIn = "Aman Kumar"
let booleanisLoggedIn = Boolean (isLoggedIn)

console.log (booleanisLoggedIn)

// 1 => true
// 0 => false
// "" =>  false
// "aman kumar" => true

let someNumber = 13

let stringNumber = String (someNumber)
console.log (stringNumber)
console.log (typeof stringNumber)