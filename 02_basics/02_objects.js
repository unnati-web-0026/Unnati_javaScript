//const tinda = new Object()  // Singleton object 
  
const tinda = {}   // Non-singleton object 

tinda.id = "123@abc"
tinda.name = "Tindu"
tinda.IsloggedIn = false
//console.log(tinda)

const regularUser = {
    email: "sonutonu@gmail.com",
    fullname : {
    usersfullname :{ 
        firstname:"Sonu Tingu",
        lastname : "Bajpai"
    } 
    }
}
// console.log(regularUser.fullnames?.usersfullname.firstname)   // ? -> used to check the value exist or not 

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}
// const obj3 = {obj1, obj2 }
//const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "uant@gmail.com",

    }
]

//console.log(users[0].email)
// console.log(tinda)

// console.log(Object.keys(tinda))
// console.log(Object.values(tinda))
// console.log(Object.entries(tinda))


// console.log(tinda.hasOwnProperty("isLoggedIn"))

const course = {
    coursename : "Mera kaam",
    price : "Mehnat",
    courseInstructor : "Mai"
}

// course.courseInstructor

const {courseInstructor : instructor} = course 

console.log(instructor)

// const navbar =  ({company})  => {

// } 

// navbar(comapny = "Unnati")