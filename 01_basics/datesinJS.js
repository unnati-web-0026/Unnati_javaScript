// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

//let myCreatedDate= new Date(2023, 0, 23)
//let myCreatedDate= new Date(2023, 0, 23, 5, 3)
// let myCreatedDate= new Date("01-14-2023")
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// let myCreatedDate= new Date("01-14-2023")
// console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))  //  /1000 is used to convert the time into seconds 

// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getDay())

newDate.toLocalString('default', {
    weekday: 'long'
})