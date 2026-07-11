const user ={
    username: "Unnati",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }


}

// user.welcomeMessage()
// user.username = "Shubhi"
// user.welcomeMessage()

// console.log(this)

function chai() {
    const username = "hitesh"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)
 
const addTwo = (num1, num2) =>  ({username: "Unnati"})
console.log(addTwo(3,4))