// const tinderUser = new Object()

const tinderUser = {}

// console.log(tinderUser)

tinderUser.id = "12345"
tinderUser.name = "Pramod"
tinderUser.email = "pramod@test.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"pramod@google.com",
    fullName:{
        userFullName:{
            firstName:"Pramod",
            lastName:"Nishad"
        }
    }
}

// console.log(regularUser?.fullName.userFullName.firstName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}
// const obj4 = {obj1,obj2}
// console.log(obj4)

// const obj4 = Object.assign(obj1,obj2,obj3)
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4)

const users = [
    {
        id:1,
        email:"pramod@test.com"
    },
    {
        id:2,
        email:"kumar@test.com"
    },
    {
        id:3,
        email:"nishad@test.com"
    }
]

// console.log(users[0].email)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course = {
    courseName:"JS Hindi",
    coursePrice:"Rs999",
    courseInstructor:"Pramod"
}

// console.log(course.courseInstructor)
const {courseInstructor} = course // Destructuring
const {courseInstructor: instructor} = course // Destructuring

console.log(courseInstructor)
console.log(instructor)

// {
//     "name":"Pramod",
//     "age":25
// }