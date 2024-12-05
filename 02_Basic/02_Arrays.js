const marvel_heroes = ["thor", "Ironman", "spiderman"]

const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push (dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat (dc_heroes)
// console.log (allHeroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log (Array.isArray("Aman"))

console.log(Array.from("Aman"))
console.log(Array.from({name: "Aman"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log (Array.of (score1, score2, score3))

// Output

// [
//     'thor',
//     'Ironman',
//     'spiderman',
//     [ 'superman', 'flash', 'batman' ],
//     'superman',
//     'flash',
//     'batman'
//   ]
//   [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]
//   false
//   [ 'A', 'm', 'a', 'n' ]
//   []
//   [ 100, 200, 300 ]


