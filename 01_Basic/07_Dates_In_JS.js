// Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myCreateDate = new Date (2024, 0, 24)
// console.log (myCreateDate.toDateString())

// Output
// Wed Jan 24 2024

// let myCreateDate = new Date (2024, 0, 24, 5, 3)
// console.log (myCreateDate.toLocaleString())

// Output
// 24/1/2024, 5:03:00 am

let myCreateDate = new Date("2024-01-15")
// console.log (myCreateDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())

// Output
// 1733252609883
// 1705276800000

console.log(Math.floor(Date.now() / 1000))

// Output
// 1733252757

let newDate = new Date ()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getFullYear())

newDate.toLocaleString ('default', {
    weekday: "long"
})




// Output
// 15/1/2024, 5:30:00 am


// Output

// Wed Dec 04 2024 00:16:37 GMT+0530 (India Standard Time)
// Wed Dec 04 2024
// 2024-12-03T18:46:37.182Z
// 4/12/2024
// 4/12/2024, 12:16:37 am