const accountId = 1441443 // variable which never change and specific to particular block
let accountEmail = "shubham@gmail.com" // variable which can change later on and specific to particular block
var accountPassoword = "1234"; // variable which is global in a file and can change later on also
accountCity = "Kanpur" // this is also a way to declare variable in JS but not to prefer
let accountState    // as of now value of this variable is undefined 
/*
prefer not to use var , because of block issue
*/

// accountId = "1234"; // const can not change


accountEmail = "nigam@gmail.com"
accountPassoword = "123"
accountCity = "Noida"

// console.log("accountId = "+accountId)

// another way to print values of variables in tabular form
console.table([accountId,accountEmail,accountPassoword,accountCity,accountState])