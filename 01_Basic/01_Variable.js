const accountId = 1223
let accountEmail = "amankumar@gmail.com"
var accountPassword = "12345"
accountCity = "Jalandhar"

// accountId = 2;  // not allowed because accountId is const 

accountEmail = "aman@gmail.com"
accountPassword = "2222332"
accountCity = "Patna"
let accountState

console.log(accountId);

/*
Prefer not to use (var)
because of issue in block scope and function scope 
*/

console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])

