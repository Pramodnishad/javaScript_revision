const arr = [1,2,3,4,5]
for (const item of arr) {
// console.log(item)
}

const greeting = "Hello World!"

for (const greet of greeting) {
    // console.log(greet)

}

for (const greet of greeting) {
    // console.log(greet)

    if (greet === " ") {
        // console.log("Space found after Hello");
        break; 
    }
}

const map = new Map()

map.set("IN","India")
map.set("USA","United State of America")
map.set("FR","France")
// console.log(map)

for (const [key,Value] of map) {
    // console.log(`Country key is ${key} and value is ${Value}`)
}

const myObject = {
    'game1':"NFS",
    'game2':"SpiderMan",
    'game3':"SuperMan",
    'game4':"Shaktiman"
}

for (const key in myObject) {
// console.log(`keys of object ${key}`)
}
for (const key in myObject) {
// console.log(`value of keys ${myObject[key]}`)
}


const programming = ['js','php','java']

for (const keys in programming) {
    // console.log(keys)
}
for (const keys in programming) {
    // console.log(programming[keys])
}

// for (const key in map) {             // will not work on for in
// console.log(map[key])
// }