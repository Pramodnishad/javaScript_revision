const user = {
    userName:"Pramod",
    price:9999,

    welcomeMessage: function(){
        // console.log(`${this.userName} , welcome to website`)
        // console.log("inner:",this)
    }
    
}

// user.welcomeMessage()
// user.userName = "Hello Sir"
// user.welcomeMessage()
// console.log(this)

// function adjust(){
//     const userName = "Padrick"
//     console.log(this.userName)
// }
// const adjust = function(){
//     const userName = "Padrick"
//     console.log(this.userName)
// }
// const adjust = () =>{
//     const userName = "Padrick"
//     console.log(this.userName)
// }

// adjust()


// const addNumber = (num1,num2) =>{
// return num1 + num2
// }
// const addNumber = (num1,num2) => num1 + num2
// const addNumber = (num1,num2) => (num1 + num2)
const addNumber = (num1,num2) => ({userName:"Pramod"})
console.log(addNumber(10,5))