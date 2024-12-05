// const email = "p@gmail.com"
const email = ""

if (email) {
// console.log("got user email")
} else {
    // console.log("Don't find user email")
}

//  Falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// Truthy values

"0", "False", " " , [] , {} , function(){}

const userEmail = []
if (userEmail.length === 0) {
// console.log("Array is empty")
}

const emptyObject = {}

if (Object.keys(emptyObject)) {
// console.log("Object is empty")
}
