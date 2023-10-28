console.log("---------PART - 1-----------");
const employee = {
    name : "shubham nigam",
    age : 24,
    city: "kanpur",
    company: "genpact",
    lastLoginDays:["Monday","Saturday"]
}


console.log(employee.lastLoginDays);


employee.greeting = function(){
    console.log(`Hello `+employee.name);
}

console.log(employee.greeting());


const tinderUser = {

}
console.log();
console.log("---------PART - 2-----------");

tinderUser.id = 101
tinderUser.name = "Shubham Nigam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const bumbleUser = {
    userDetails:{
        firstName: "Shubham",
        lastName:"Nigam",
        age:25
    },
    addressDetails:{
        city:"Kanpur",
        pincode:208006,
        area:"Govind Nagar Road",
        landmark:"Sweet Home School"
    },

}

console.log(bumbleUser);
console.log(bumbleUser.userDetails);
console.log(bumbleUser.addressDetails);