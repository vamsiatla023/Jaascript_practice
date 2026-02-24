const accountId = 144536
let accountEmail = "vamsiatla@google.com"
var accountPassword = "12345"
accountCity= "channai";

// accountId = 2 not allowed

accountEmail = "atla@gmail.com"
accountPassword = "54321"
accountCity= "bangalore"

console.log(accountId);

/*
prefer not to use var
because of issuer in the block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity])