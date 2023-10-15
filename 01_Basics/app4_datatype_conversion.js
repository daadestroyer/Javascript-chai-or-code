let score = "30abc"

// coverting string to number
let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(typeof(valueInNumber))
console.log(valueInNumber)


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0


let isLoggedIn  = "shubham"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 0 => false
// 1 => true
// ""(empty string) => false
// "  "(not empty string) or "shubham" => true


let someNumber = 33

let stringNumber  = String(someNumber);
console.log(typeof stringNumber);


// ******************* OPERATIONS ***********************



let value = 3
let negValue = -value
console.log(negValue) // -3

console.log(2+2)  // addition
console.log(2-2)  // subtraction
console.log(2*2)  // multiplication
console.log(6/3)  // division (gives quotient)
console.log(6%3)  // modulus (gives remainder)
console.log(2**2) // 2 raise to the power 2 = 4
console.log(2**3) // 2 raise to the power 3 = 8


console.log();

let str1 = "hello"
let str2 = " shubham"
let str3 = str1+str2
console.log(str3);

// execution flow is going from left to right
console.log("1"+2); // 12
console.log(1+"2"); // 12
console.log("1"+2+2); // 122 (execution going from left to right hence first comes string 1 then 2 concat with 1 and then again 2 concat with 2)
console.log(1+2+"2"); // 32 (execution going from left to right hence 1+2 = 3 of type number that will later on concat with 2)