const temperature = 41;
// if (temperature === "41") {
//     console.log("Temperatuer  found")
// } else {
// console.log("temperature not found")
// }

// < , > , <= , >= , != , === , !==

// const score = 200;

// if(score >100){
// const power = "fly"
// console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`)  // Out of scope

const balence = 1500
// if(balence > 500) console.log("balence is maintained"), console.log("balence is not maintained")

// if (balence < 500){
// console.log("balence is less than 500")
// } else if (balence < 750) {
//     console.log("balence is less than 750")
// } else if (balence < 900) {
//     console.log("balence is less than 900")
// } else {
//     console.log("balence is less than 1200")

// }

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard ) {
// console.log("Allow user to enter")
}

const userLoginGmail = true
const userLoginPassword = true

if (userLoginGmail || userLoginPassword ) {
    // console.log("User logged in")
}

//  Nullish Coalesing Operator

let val1 
// val1 = 5 ?? 10
val1 = undefined ?? 20
// val1 = null ?? 10
val1 = undefined ?? 10 ?? 20

// console.log(val1)

//  Terniary Operator

// Condition ? true : false

const lemonTeaPrice = 100

lemonTeaPrice <= 80 ? console.log("Greater than 100") : console.log("Less than 80")