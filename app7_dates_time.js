// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(myDate.toISOString());
console.log(myDate.toUTCString());

console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log("-----DATE------");

// let createMyDate = new Date(1998,0,14)
let createMyDate = new Date("10-14-1998")
console.log(createMyDate.toDateString());
console.log(createMyDate.toLocaleString());
console.log(createMyDate.toLocaleDateString());


console.log("-----TIMESTAMP------");

let timeStamp =  Date.now();
// console.log(timeStamp);
// console.log(createMyDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(createMyDate.getMonth());
console.log(createMyDate.getDay());