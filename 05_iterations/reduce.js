const myNums = [1,2,3]

const itemvalue = [500,700,800]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc:${acc} and curval:${curval}`)
//     return acc + curval 
// },0)

const myTotal = myNums.reduce((acc, curval)=>     acc+ curval ,0)
const myCartValue = itemvalue.reduce((acc, curval)=>     acc+ curval ,0)
// console.log(myTotal)
// console.log(myCartValue)

const shopingCart = [
    {
        courseName : "Js",
        price:1999
    },
    {
        courseName : "py",
        price:999
    },
    {
        courseName : "native",
        price:5999
    },
    {
        courseName : "data",
        price:12999
    },
]

const priceToPay = shopingCart.reduce((acc, item)=> item.price + acc,0)
console.log(priceToPay)