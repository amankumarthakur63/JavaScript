// array 
const myarr = [1, 2, 3, 4, 5, 6, 7]
const myHeroes = ["shaktiman", "naag"]

const myarr2 = [23, 43, 45]
// console.log (myarr[2])

// myarr.push (6)   // in my arr push 6 at the index last of the myarr
// myarr.push (9)   // in my arr push 9 at the index last of the myarr   
// myarr.pop ()     // in my arr pop the value at index last of the myarr

// myarr.unshift (9) // in myarr value 9 is inserted at the index 0 
// myarr.shift ()    // in myarr value 9 is removed at the index 0

// console.log (myarr.includes (9)) // if value includes then return true otherwise return false

// console.log (myarr.indexOf (9))  // if value is not contains in myarr than return -1

// console.log (myarr.includes (3)) // return true when myarr contains 3 index of true

// const newarr = myarr.join ()  // its convert the array to string

// console.log (myarr)
// console.log (newarr)
// console.log (typeof newarr)

// slice, splice

console.log ("A ", myarr)

const myn1 = myarr.slice (1, 3)
console.log (myn1)
console.log ("B ", myarr)

const myn2 = myarr.splice (1, 3)
console.log ("C ", myarr)
console.log (myn2)



