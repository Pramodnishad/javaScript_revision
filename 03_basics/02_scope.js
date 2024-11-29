
// var c = 500
let a = 500
const b = 200;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner:",a)
    // console.log("Inner:",b)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const userName = "Pramod"
   
    function two(){
        const website = "jingle.com"
        console.log(userName)
    }
    // console.log(website)
    // two()
} 
// one()

if(true){
const userName = "Pramod"
if(userName === "Pramod"){
const website = "jewels.com"
// console.log(userName + website)
}
// console.log(website)
}
// console.log(userName)

// *************Interesting concept********************
// console.log(addOne(5))
function addOne(num){
return num + 1 
}


// console.log(addTwo())
const addTwo = function(num){
    return num + 2
}

// console.log(addTwo(5))
// const person = {
//     name:"Pramod",
//     age:25
// }

// delete person.age
// console.log(person)




