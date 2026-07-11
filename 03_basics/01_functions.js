// function sayMyName(){
//     console.log("U");
//     console.log("N");
//     console.log("N");
//     console.log("A");
//     console.log("T");
//     console.log("I");
// } 

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

// addTwoNumbers(4,75)

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")    
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Unnati"))
// console.log(loginUserMessage())

const user = {
    username: "Unnati",
    price: 199 
}
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
 }

//  handleObject(user)

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
