const programming = ['js','python','ruby','php','java']


programming.forEach(function (item) {
// console.log(item)
})
programming.forEach(function (item,index) {
// console.log(index+1 , item)
})
// programming.forEach((item)=>{
//     console.log(item)
// })

function printMe(item){
    console.log(item)
}

// programming.forEach(printMe)

const coding = [
    {
        fileName:"js",
        filelangaugeName:"javascript"
    },
    {
        fileName:"py",
        filelangaugeName:"python"
    },
    {
        fileName:"rb",
        filelangaugeName:"ruby"
    },
]

coding.forEach( (item)=>{
// console.log(item.fileName)
// console.log(item.filelangaugeName)
})

