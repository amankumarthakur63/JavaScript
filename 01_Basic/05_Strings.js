const name = "aman"
const repoCount = 50

// console.log(name + repoCount + " value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('aman-ak-com')
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf('k'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "      aman      "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://aman.com/aman%20kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('amanji'))

console.log(gameName.split('-'))


// Output

// Hello my name is aman and my repo count is 50
// a
// {}
// 11
// AMAN-AK-COM
// m
// 6
// aman
// n
//       aman
// aman
// https://aman.com/aman-kumar
// false
// [ 'aman', 'ak', 'com' ]
