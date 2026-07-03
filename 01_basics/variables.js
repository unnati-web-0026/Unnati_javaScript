const accountId = 123736   // used to declare constant values(can't changed after declaration)
let accountEmail = "unnati02@gmail.com"  // used to declare variables
var accountPassword = "123456"   // used to declare variables 
accountCity = "Lucknow"

let accountName
/* 
Prefer let to declare variables instead of var because of scope issues 
*/
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountName])