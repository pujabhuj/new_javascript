const accountId = 14453
let accountEmail = "pujagmail.com"
var accountPassword = "132364"
accountCity ="Pune" 
 let accountState;

// accountId = 2 not allowed constant cant change
/*
prefer nnot to use var because of issue in block scope and functional scope

*/
accountEmail ="dev@gmail.com"
accountPassword = "456987"
accountCity = "nashik"
 console.log(accountId); 

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])    