// Comparison operator

console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)

// Always compare with same data types

console.log("2" > 1)  // js convert this string in number and gives true but this is not a good way for comparison
console.log("02" > 1)


console.log(null > 0)  // flase
console.log(null == 0) // false
console.log(null >= 0) // true, that the region we don't use diffent data types in comparison operation

console.log(undefined > 0)  // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

// === strictly check

console.log("2" === 2)