// const myArray = [0,2,4,5,7]
// console.log(myArray[2])

// Array Methods

// console.log(myArray.push(8,9,10,11,12))
// console.log(myArray.pop())
// console.log(myArray.unshift(5))
// console.log(myArray.shift())
// console.log(myArray)
// console.log(myArray.includes(7))
// console.log(myArray.includes(19))
// console.log(myArray.indexOf(7))
// console.log(myArray.indexOf(70))

const newArray = myArray.join()

// console.log(newArray)
// console.log(typeof newArray) 



//  Slice and Splice
const myArray = [0,2,4,5,7]

const myn1 = myArray.slice(1,3)
console.log(myn1)

const myn2 = myArray.splice(1,3)
console.log(myArray)
console.log(myn2)