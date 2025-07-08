const accountId = 123456
let accountEmail = "supriya@gmail.com"
var accountPasswort = "112233"
accountCity = "Kolkata"
let accountState;

accountEmail = "soumalya@gmail.com"
accountPassword = "778899"
accountCity = "Burdwan"

/*Prefer not to use var
because of issues in block scope and functional scope*/

console.log(accountId);
console.table([accountId,accountEmail,accountPasswort,accountCity,accountState])
