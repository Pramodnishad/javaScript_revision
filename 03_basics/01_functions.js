function printMyName(){
    console.log("Pramod")
}

// printMyName()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }

// addTwoNumber() // arguments are not passed
// addTwoNumber(3,5)

function addTwoNumber(num1,num2){
    // let result = num1 + num2
    // return result

    return num1 + num2

}
const result = addTwoNumber(10,5)
// console.log(result)

// function loginUser(userName){
//     return(`${userName} just logged in`)
// }

// console.log(loginUser("Pramod"))

function loginUser(userName){
    if(!userName){
console.log("Please enter a valid user Name")
    }
    return `${userName} just loggedIn`
}

// console.log(loginUser(" Pramod"))

function addCartPrice(...value){
    return value  
}

// console.log(addCartPrice(100,500))


const user = {
    userName:"Pramod",
    price:499
}

function handleObejct(anyobject){
    console.log(`userName is ${anyobject.userName} and price is ${anyobject.price}`)
}

// handleObejct(user)
handleObejct({
    userName:"Pramod",
    price:499
})

const newArray = [100,200,300,400,500]

function returnSecondValue(array){
    return array
}
function returnSecondValue(array){
    return array[2]
}

console.log(returnSecondValue(newArray))