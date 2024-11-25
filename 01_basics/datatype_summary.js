// Two types of data types

// 1---- Primitive
// 7 types of Primitive data types:--- String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const team = "Up"
// const number = 123
// const useLoggedIn = false
const temp = null
const id = Symbol("123") 
const anotherId = Symbol("123")
console.log(id === anotherId)
console.log(id && anotherId)

// const bigNumber = 1323644236484n

// 2------- Referenct (Non-Primitive)

const heros = ["Ram", "Krishna"]

const myObj = {
    name:"Pramod",
    age:""
}

const myFunction = function(){
console.log("Hello world")
}
// console.log(typeof bigNumber)
// console.log(typeof temp)
// console.log(typeof heros)





//   **************************************************************************

//  Memory type

//  Stack (Primitive)
//  Heap (Non-primitive)


//  Stack 
let myName = "Pramod"

let anotherName = myName
anotherName = "Kumar"
// console.log(myName)
// console.log(anotherName)

let userOne = {
    email: "pramod@test.com",
    name:"Pramod"
}
 let userTwo = userOne;
 userTwo.email = "nishadpramod@google.com"

 console.log(userOne)
 console.log(userTwo)