let d = 100
function checkScope(){
    let a = 10
    const b = 20
    var c = 30
    console.log(d);
}


// console.log(a); // a is not defined
// console.log(b); // b is not defined
// console.log(c); // c is not defined
console.log(c);
console.log(d);