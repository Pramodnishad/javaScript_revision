
const mySymbol =Symbol ("myKey1")
const userData = {
    name:"Pramod",
    aga:25,
    email:"nishadpramod.001@gmail.com",
    "full name":"Pramod Kumar Nishad",
    [mySymbol]:"myKey1"
}

// console.log(userData.email)
// console.log(userData["full name"])
// console.log(userData[mySymbol])
// Object.freeze(userData)
// userData.email = "test@gmail.com"
// console.log(userData)

userData.greetings = function(){
    console.log("hello user")
}
console.log(userData.greetings)
console.log(userData.greetings())