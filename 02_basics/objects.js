// singleton
// Object.create
// objects literals


const mySym = Symbol("Key1")

const JsUsers = {
    name : "Unnati",
    "Full name" : "Unnati gupta", // can't access with . notations
    age : 14,
    [mySym] : "myKey1",
    gender: "female",
    email : "unnati@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ['Monday','Saturday']
}

// console.log(JsUsers["email"])
// console.log(JsUsers[mySym])

JsUsers.email = "hitesh@chatgpt.com"
//Object.freeze(JsUsers)
//JsUsers.email = "unnati@chatgpt.com"
//console.log(JsUsers)

JsUsers.greeting = function(){
    console.log("Hello JS Users")
}   

JsUsers.greetingTwo = function(){
    console.log(`Hello JS Users, ${this["Full name"]}`)
}   


console.log(JsUsers.greeting())
console.log(JsUsers.greetingTwo())
