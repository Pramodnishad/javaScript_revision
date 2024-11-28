const marvel_heros = ["thor","ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][2])

// const new_heros = marvel_heros.concat(dc_heros)

const spreadArray = [...marvel_heros , ...dc_heros]

// console.log(new_heros)
// console.log(spreadArray)

const another_array = [1,2,3,[4,5],6,[7,8,[9,10,[11,12]]]]
const real_array = another_array.flat(Infinity)
// console.log(real_array)

// console.log(Array.isArray("Pramod"))
// console.log(Array.from("Pramod"))
// console.log(Array.of("Pramod","Kumar","Nishad"))

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3))