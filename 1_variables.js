const accountId = 14455
let accountEmail= "pandeysuham@gmail.com"
var accountPassword = "12345"
accountCity = "Butwal"
let accountState;

//accountId = 2         //value can not be changed

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "suham@gmail.com"
accountPassword= " 154"
accountCity= "pokhara"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])
