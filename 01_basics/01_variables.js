const accountId = 5455 // can't be changed once initialized
let accountEmail = "aryapanchal2022@gmail.com"
var accountPass = "5658"
accountCity = "Vadodara"
let accountState;
// accountId = 2
accountEmail = "ns@ns.com"
accountPass = "1212121"
accountCity = "Navsari"

// prefer not to use var bcz of issue in block scope and functional scope

console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity, accountState])
